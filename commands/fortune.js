import fetch from 'node-fetch';

export default function fortuneCommand(message) {
    async function getFortune() {
        const data = await fetch('http://yerkee.com/api/fortune');
        const response = await data.json();
        message.channel.send(response.fortune);
    }
    getFortune();
}