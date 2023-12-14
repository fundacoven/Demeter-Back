import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public hello(): string {
    return 'server is alive!';
  }
}
