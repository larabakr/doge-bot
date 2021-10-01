import fetch from 'node-fetch';
import Discord from 'discord.js';

export default async function weatherCommand(message, args) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${args.split(' ').join('+')}&units=metric&appid=ce3af4f6afd74069404ba9402a860e3f`);
    const response = await data.json();

    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#F7A8B8')
    .setTitle(`Weather in ${response.name}`)
    .addFields(
        { name: 'Temperature', value: `${response.main.temp}°C`, inline: true },
        { name: 'Description', value: response.weather[0].description, inline: true },
        { name: 'Pressure', value: `${response.main.pressure}hPa`, inline: true },
        { name: 'Humidity', value: `${response.main.humidity}%`, inline: true },
        { name: 'Minnimum Temp', value: `${response.main.temp_min}°C`, inline: true },
        { name: 'Maximum Temp', value: `${response.main.temp_max}°C`, inline: true },
        { name: 'Feels like', value: `${response.main.feels_like}°C`, inline: true },
        { name: 'Visibility', value: `${(response.visibility / 1000 ).toLocaleString()}km`, inline: true },
        { name: 'Wind', value: `${response.wind.speed}m/s @ ${response.wind.deg}°`, inline: true },
    )

    message.channel.send({ embeds: [exampleEmbed] });
}