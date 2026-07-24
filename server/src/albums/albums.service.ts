import { Injectable } from '@nestjs/common';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model, QueryFilter, type ObjectId } from 'mongoose';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { FindAlbumDto } from './dto/find-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilesService } from 'src/files/files.service';
import { FileType } from 'src/files/files.constants';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private albumRepository: Model<AlbumDocument>,
    @InjectModel('Track') private trackRepository: Model<any>,
    private filesService: FilesService
  ) {}

  async getAllAlbums(query?: FindAlbumDto) {
    const queryFilter: QueryFilter<Album> = {};
    if (query?.name) {
      queryFilter.name = { $regex: new RegExp(query.name, 'i') };
    }
    if (query?.artist) {
      queryFilter.artist = { $regex: new RegExp(query.artist, 'i') };
    }

    return await this.albumRepository.find(queryFilter);
  }

  async getAlbumById(id: ObjectId) {
    const album = this.albumRepository.findById(id).populate('tracks');
    return album;
  }

  async createAlbum(
    createAlbumDTO: CreateAlbumDTO,
    picture: Express.Multer.File
  ) {
    const pictureMetaString = this.filesService.createFile(
      FileType.PICTURE,
      picture
    );
    const createdAlbum = await this.albumRepository.create({
      ...createAlbumDTO,
      coverImage: pictureMetaString
    });

    if (createAlbumDTO.trackIds?.length) {
      await this.trackRepository.updateMany(
        { _id: { $in: createAlbumDTO.trackIds } },
        { $set: { albumId: createdAlbum._id } }
      );
    }

    return createdAlbum;
  }

  async deleteAlbumById(id: ObjectId) {
    await this.trackRepository.updateMany(
      { albumId: id },
      { $unset: { albumId: '' } }
    );
    const deletedAlbum = await this.albumRepository.findByIdAndDelete(id);
    return deletedAlbum;
  }

  async attachTracksToAlbum(albumId: ObjectId, trackIds: ObjectId[]) {
    if (!trackIds?.length) return [];
    return await this.trackRepository.updateMany(
      { _id: { $in: trackIds } },
      { $set: { albumId } }
    );
  }
}
