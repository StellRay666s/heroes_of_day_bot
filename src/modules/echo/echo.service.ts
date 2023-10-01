import { Injectable } from '@nestjs/common';
import {
  Command,
  Hears,
  Help,
  InjectBot,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
@Injectable()
export class EchoService {
  constructor(
    @InjectBot('test_bot')
    private readonly bot: Telegraf<Context>,
  ) {}

  @Command('register')
  async onRegister(ctx: Context) {
    const context = await ctx.message.from.first_name;
    return context;
  }
}
