import fetch from 'node-fetch';

export default function jokeCommand(message) {
    async function getJoke() {
        const data = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        const response = await data.json();
        let randomIndex = Math.floor(Math.random() * 9);
        message.channel.send(`${response[randomIndex].setup}

${response[randomIndex].punchline}`);
    }
    getJoke();
}