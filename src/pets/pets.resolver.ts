import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dtos/create-pet.input';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Mutation((returns) => Pet)
  async createPet(
    @Args('CreatePetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
