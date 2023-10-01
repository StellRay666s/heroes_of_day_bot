import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { EchoModule } from '../modules/echo/echo.module';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegraphConfigService } from '../config/telegraphConfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormModuleOptions } from '../config/configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormModuleOptions),
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      useClass: TelegraphConfigService,
      botName: 'test_bot',
    }),

    EchoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
