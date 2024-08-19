import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Welcome')
@Controller()
export class WelcomeController {
  @Get()
  welcome() {
    return 'Welcome to Docker Tut API!';
  }
}
