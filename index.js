const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log('connected as ' + client.user.tag);
    client.user.setActivity('=')
});

client.on('message', message => {
    if (message.author === client.user) {
        return;
    }

    if (message.content === "uwu") {
        message.channel.send('uwu');
    }
    
    if (message.content === "doge who made you?" || message.content === "Doge who made you?") {
        message.channel.send('lara made me <:emoji:751220586050486413> <:emoji:751220679642316830>');
    }

    if (message.content === "i love you doge" || message.content === "I love you doge") {
        message.channel.send('I love you too ' + message.author.toString());
    }

    if (message.content.startsWith("=")) {
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
        case 'creator':
            infoCommand(message);
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
        case 'sex':
            message.channel.send("die. go pray to allah instead of this shit.")
            break;
        default:
            return;
    }
}
 
function helpCommand(message) {
    message.channel.send(`command list: (prefix is =)
 meme
 joke
 fortune
 corona [country]
 pray
 weather [city]
 convert [amount] [base currency] [target currency]`);
}

function memeCommand(message) {
    let uwu = '';
    async function getMeme() {
        const data = await fetch('https://meme-api.herokuapp.com/gimme');
        const response = await data.json();
        uwu = response.url;
        message.channel.send({ files: [uwu] });
    }
    getMeme();
}

function jokeCommand(message) {
    async function getJoke() {
        const data = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        const response = await data.json();
        let randomIndex = Math.floor(Math.random() * 9);
        message.channel.send(`${response[randomIndex].setup}

${response[randomIndex].punchline}`);
    }
    getJoke();
}

function weatherCommand(message, args) {
    async function getWeather() {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=ce3af4f6afd74069404ba9402a860e3f`);
        const response = await data.json();
        message.channel.send(`
${response.main.temp}°C
${response.weather[0].description}
feels like: ${response.main.feels_like}°C
low: ${response.main.temp_min}°C high: ${response.main.temp_max}°C
pressure: ${response.main.pressure} hpa humidity: ${response.main.humidity}%
        `);
    }
    getWeather();
}

function fortuneCommand(message) {
    async function getFortune() {
        const data = await fetch('http://yerkee.com/api/fortune');
        const response = await data.json();
        message.channel.send(response.fortune);
    }
    getFortune();
}

function coronaCommand(message, args) {
    async function getCases() {
        try {
            const data = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${args}`);
            const response = await data.json();

            message.channel.send('Country: ' + response.country + '\nTotal Cases: ' + response.cases + '\nRecovered: ' + response.recovered + "\nNew cases: " + response.todayCases + '\nDeaths: ' + response.deaths + '\nCurrent Cases: ' + response.active + '\nCritical Cases: ' + response.critical);
        } catch (err) {
            message.channel.send('error: country not found.');
        }
    }
    getCases();
}

function prayCommand(message) {
    message.channel.send(message.author.toString() + ' earned 10 hasanat! <:emoji:729607591906508830>');
}

function currencyCommand(message, args) {
    const amount = args[1];
    const baseCurrency = args[2];
    const targetCurrency = args[3];
    async function convert() {
        const data = await fetch(`http://free.currconv.com/api/v7/convert?q=${baseCurrency}_${targetCurrency}&compact=ultra&apiKey=cc8786072582cfa6e0e4`);
        const response = await data.json();
        const result = response[`${baseCurrency.toUpperCase()}_${targetCurrency.toUpperCase()}`] * amount;
        const format = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: targetCurrency
        });
        message.channel.send(`${amount} ${baseCurrency.toUpperCase()} is ${format.format(result)}`);
    }
    convert();
}

require("dotenv").config()

client.login(process.env.TOKEN);