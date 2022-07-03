import Event from './event.js'

export default class extends Event {
    on = 'ready';

    invoke() {
        console.log("Ready");
    }
}