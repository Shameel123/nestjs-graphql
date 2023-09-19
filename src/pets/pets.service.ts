import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dtos/create-pet.input';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const { name, type } = createPetInput;
    const pet = this.petsRepository.create({ name, type });
    const createdPet = this.petsRepository.save(pet);
    return createdPet;
  }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
}
