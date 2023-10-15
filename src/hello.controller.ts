import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly hellService: HelloService) {}

  @Get('hello')
  public hello(): string {
    return this.hellService.hello();
  }
}
