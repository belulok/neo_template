//import { config } from 'dotenv';
//config({ path: '.env' });

import { Client, Intents } from 'discord.js';
import { EventHandler } from './handlers/event-handler.js';

export const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

new EventHandler().init();


//bot.login(process.env.BOT_TOKEN);


bot.login('OTM0MzM1OTQ5MDcxMDY5MTg0.GXaSRX.ARGGusUPkfnephgP5JqY-0nGK7Newb93pC-HKM');
