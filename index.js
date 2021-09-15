import Discord from 'discord.js';
import { config } from 'dotenv';

import { helpCommand, helpModeration } from './commands/help.js';
import memeCommand from './commands/meme.js';
import muteCommand from './commands/mute.js';
import prayCommand from './commands/pray.js';
import banCommand from './commands/ban.js';
import jokeCommand from './commands/joke.js';
import kickCommand from './commands/kick.js';
import fortuneCommand from './commands/fortune.js';
import coronaCommand from './commands/coronavirus.js';
import weatherCommand from './commands/weather.js';
import currencyCommand from './commands/currency.js';
import unmuteCommand from './commands/unmute.js';

const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });

client.on('ready', () => {
    console.log('connected as ' + client.user.tag);

    // const exampleEmbed = new Discord.MessageEmbed()
    // .setColor('#F7A8B8')
    // .setTitle('Rules')
    // .setAuthor('Duaa cult', 'https://cdn.discordapp.com/icons/853208751569633281/d4074965863627ac98b68c0122c24558.webp?size=256')
    // .setDescription("1. No anti-LGBT behavior in any form. No misogyny, racism, sexism or xenophobia\n2. Don't use slurs, be respectful\n3. Don't insult Doge <:duaa:853210232176246794>\n4. No neo-nazi or any alt-right content is allowed\n5. Don't post harmful/suspicious links\n6. Don't spam")

    // client.channels.cache.get('856185862239944734').send(exampleEmbed)

    setInterval(() => {
        client.channels.cache.get('882042893135650848').send('!d bump');
    }, 7200000);
});

client.on('message', message => {
    if (message.author === client.user) {
        return;
    }

    // client.user.setUsername("Doge (عليه السلام)")

    if (message.content.startsWith(">")) {
        processCommand(message);
    }
});

function processCommand(message) {
    const fullCommand = message.content.substr(1);
    const splitCommand = fullCommand.split(' ');
    const primaryCommand = splitCommand[0];
    const args = splitCommand[1];

    switch(primaryCommand) {
        case 'help':
            helpCommand(message);
            break;
        case 'meme':
            memeCommand(message);
            break;
        case 'joke': 
            jokeCommand(message);
            break;
        case 'pray':
            prayCommand(message);
            break;
        case 'fortune':
            fortuneCommand(message);
            break;
        case 'corona':
            coronaCommand(message, args);
            break;
        case 'weather':
            weatherCommand(message, args);
            break;
        case 'convert':
            currencyCommand(message, splitCommand);
            break;
        case 'mod':
            helpModeration(message);
            break;
        case 'kick':
            kickCommand(message);
            break;
        case 'ban':
            banCommand(message);
            break;
        case 'mute': 
            muteCommand(message, args);
            break;
        case 'unmute':
            unmuteCommand(message, args);
            break;
        default:
            return;
    }
}

config();

client.login(process.env.TOKEN);