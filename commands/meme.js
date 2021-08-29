import { MessageAttachment } from 'discord.js';
import fetch from 'node-fetch';

const memeSources = [
    'GaySoundsShitposts', 
    'egg_irl', 
    'me_irlgbt', 
    'traaaaaaannnnnnnnnns', 
    'ennnnnnnnnnnnbbbbbby', 
    'wholesometransmemes', 
    'aaaaaaacccccccce', 
    'lgbtmemes',
    'bisexualmemes'
];

export default function memeCommand(message) {
    (async () => {
        const data = await fetch(`https://www.reddit.com/r/${memeSources[Math.floor(Math.random() * memeSources.length)]}.json`);
        const response = await data.json();
    
        const posts = response.data.children;
        let results = [];
    
        posts.forEach(post => {
            const meme = post.data.url;
    
            if (meme.slice(meme.length - 4) === '.png' || meme.slice(meme.length - 4) === '.jpg' || meme.slice(meme.length - 4) === '.gif') {
                results.push(meme);
            }
        });
        results = results.slice(2);
    
        message.channel.send(new MessageAttachment(results[Math.floor(Math.random() * results.length)]));
    })();
}