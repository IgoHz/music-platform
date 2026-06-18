import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model, QueryFilter, type ObjectId } from 'mongoose';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { FindAlbumDto } from './dto/find-album.dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private albumRepository: Model<AlbumDocument>,
  ) {}

  async getAllAlbums(query?: FindAlbumDto) {
    const queryFilter: QueryFilter<Album> = {};
    if (query?.name) {
      queryFilter.name = { $regex: new RegExp(query.name, 'i') };
    }
    if (query?.artist) {
      queryFilter.artist = { $regex: new RegExp(query.artist, 'i') };
    }

    return await this.albumRepository.find(queryFilter).populate('tracks');
  }

  async getAlbumById(id: ObjectId) {
    const album = this.albumRepository.findById(id).populate('tracks');
    return album;
  }

  async createAlbum(createAlbumDTO: CreateAlbumDTO) {
    const createdAlbum = await this.albumRepository.create(createAlbumDTO);
    return createdAlbum;
  }

  async updateAlbum(id: ObjectId, updateAlbumDTO: UpdateAlbumDTO) {
    const updatedAlbum = await this.albumRepository.findByIdAndUpdate(
      id,
      { $set: updateAlbumDTO },
      { new: true }
    );
    return updatedAlbum;
  }

  async deleteAlbumById(id: ObjectId) {
    const deletedAlbum = await this.albumRepository.findByIdAndDelete(id);
    return deletedAlbum;
  }
}
