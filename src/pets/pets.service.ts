import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  findAll(): Promise<Pet[]> {
    return Promise.resolve([
      { id: 1, name: 'Cat', type: 'Cat' },
      { id: 2, name: 'Dog', type: 'Dog' },
      { id: 3, name: 'Hamster', type: 'Hamster' },
    ]);
  }
}
