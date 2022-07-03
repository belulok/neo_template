import Event from './event.js' // we tell node.js what class we want to import and where to get that class from

export default class extends Event {
    on = 'message';

    async invoke(msg) {
        if(msg.author.bot) return;

        await msg.reply('Hi');
    }
}