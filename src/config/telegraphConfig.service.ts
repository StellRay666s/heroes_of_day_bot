import { Injectable } from '@nestjs/common';
import { TelegrafModuleOptions, TelegrafOptionsFactory } from 'nestjs-telegraf';
import * as process from 'process';

@Injectable()
export class TelegraphConfigService implements TelegrafOptionsFactory {
  createTelegrafOptions():
    | Promise<TelegrafModuleOptions>
    | TelegrafModuleOptions {
    return { token: process.env.ECHO_BOT_TOKEN };
  }
}
