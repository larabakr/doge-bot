import fetch from 'node-fetch';

export default function memeCommand(message) {
    let uwu = '';
    async function getMeme() {
        const data = await fetch('https://meme-api.herokuapp.com/gimme');
        const response = await data.json();
        uwu = response.url;
        message.channel.send({ files: [uwu] });
    }
    getMeme();
}