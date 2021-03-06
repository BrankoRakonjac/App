import { Controller, Get, Param } from '@nestjs/common';
import { Administrator } from 'entities/administrator.entity';
import { AdministratorService } from './services/administrator/administrator.service';

@Controller()
export class AppController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  getHello(): string {
    return 'Home page'
  }

  @Get('api/administrator')
  getAllAdmins(): Promise<Administrator[]>{
    return this.administratorService.getAll();
  }

  @Get('api/administrator/:id')
  getById(@Param('id') administratorId: number): Promise<Administrator>{
    return this.administratorService.getById(administratorId);
  }
}
