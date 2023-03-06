import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  post(@Body() body) {
    return this.appService.post(body.text, body.options);
  }
}
