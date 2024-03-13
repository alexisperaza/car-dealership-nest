import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }


    @Get(':id')
    getCardById( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.findOneById(id);

    }

    @Post()
    // @UsePipes( ValidationPipe)
    createCar( @Body()  createCarDto: CreateCarDto){
        return this.carsService.create( createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe ) id: string,
        @Body()  updateCadDto: UpdateCarDto){

            return this.carsService.update( id, updateCadDto );
    }

    
    @Delete(':id')
    deleteCar( @Param('id',ParseUUIDPipe) id: string){
        return this.carsService.delete( id );
    }


}
