import { Injectable } from '@nestjs/common';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model, QueryFilter, type ObjectId } from 'mongoose';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilesService } from 'src/files/files.service';
import { FileType } from 'src/files/files.constants';
import { AttachTracksToAlbumDTO } from './dto/attach-tracks-to-album.dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private albumRepository: Model<AlbumDocument>,
    @InjectModel('Track') private trackRepository: Model<any>,
    private filesService: FilesService
  ) {}

  async getAllAlbums(count: number, offset: number, query: string) {
    const queryFilter: QueryFilter<Album> = {};
    if (query) {
      queryFilter.name = { $regex: new RegExp(query, 'i') };
    }
    const [albums, totalCount] = await Promise.all([
      this.albumRepository.find(queryFilter).skip(offset).limit(count),
      this.albumRepository.countDocuments(queryFilter)
    ]);
    const pagesAmount = Math.ceil(totalCount / count);
    const currentPage = Math.floor(offset / count) + 1;
    return { albums, pages: pagesAmount, currentPage };
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
    const { trackIds, ...albumData } = createAlbumDTO;
    const createdAlbum = await this.albumRepository.create({
      ...albumData,
      coverImage: pictureMetaString,
      tracks: trackIds
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

  async attachTracksToAlbum(
    albumId: ObjectId,
    attachTracksToAlbumDTO: AttachTracksToAlbumDTO
  ) {
    if (!attachTracksToAlbumDTO.trackIds?.length) return [];
    const [updatedAlbum] = await Promise.all([
      this.albumRepository.findByIdAndUpdate(
        albumId,
        {
          $push: { tracks: { $each: attachTracksToAlbumDTO.trackIds } }
        },
        { new: true }
      ),
      this.trackRepository.updateMany(
        { _id: { $in: attachTracksToAlbumDTO.trackIds } },
        { $set: { albumId } }
      )
    ]);
    return updatedAlbum;
  }
}
