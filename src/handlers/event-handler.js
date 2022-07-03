import { readdirSync } from 'fs';
import { bot } from '../bot.js';

export class EventHandler {
    async init() {
        const fileName = readdirSync('./src/handlers/events'); //['event.js', 'message-event.js', ''ready-event.js]

        for (const name of fileName) {
            const {default: Event} = await import(`./events/${name}`);
            const event = new Event(); //local variable
            if(!event.on) continue;

            bot.on(event.on, event.invoke.bind(event))
        }
    }
}

