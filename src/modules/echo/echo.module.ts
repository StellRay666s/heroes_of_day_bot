import { Module } from '@nestjs/common';
import { EchoService } from './echo.service';
@Module({
  imports: [],
  providers: [EchoService],
  exports: [EchoService],
})
export class EchoModule {}
