import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Controller('ccc')
export class CccController implements OnModuleInit,OnApplicationBootstrap,OnModuleDestroy,BeforeApplicationShutdown {
  constructor(private readonly cccService: CccService) {}

  onModuleDestroy() {
    console.log('onModuleDestroy')
  }
  
  beforeApplicationShutdown(signal?: string) {
    console.log('beforeApplicationShutdown')
  }

  onModuleInit() {
    console.log('onModuleInit')
  }
  
  onApplicationBootstrap() {
    console.log('onApplicationBootstrap')
  }



  @Post()
  create(@Body() createCccDto: CreateCccDto) {
    return this.cccService.create(createCccDto);
  }

  @Get()
  findAll() {
    return this.cccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cccService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCccDto: UpdateCccDto) {
    return this.cccService.update(+id, updateCccDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cccService.remove(+id);
  }
}
