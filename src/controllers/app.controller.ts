import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getIndex(): string {
    return 'Home page'
  }
}
