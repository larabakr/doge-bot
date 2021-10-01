import fetch from 'node-fetch';
import Discord from 'discord.js';

export default function coronaCommand(message, args) {
    async function getCases() {
        try {
            const data = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${args.split(' ').join('+')}`);
            const response = await data.json();

            // message.channel.send('Country: ' + response.country + '\nTotal Cases: ' + response.cases + '\nRecovered: ' + response.recovered + "\nNew cases: " + response.todayCases + '\nDeaths: ' + response.deaths + '\nCurrent Cases: ' + response.active + '\nCritical Cases: ' + response.critical);

            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#F7A8B8')
                .setTitle(`COVID-19 situation in ${response.country}`)
                .addFields(
                    { name: 'Total Cases', value: response.cases.toLocaleString(), inline: true },
                    { name: 'Recovered', value: response.recovered.toLocaleString(), inline: true },
                    { name: 'New Cases', value: response.todayCases.toLocaleString(), inline: true },
                    { name: 'New Deaths', value: response.todayDeaths.toLocaleString(), inline: true },
                    { name: 'Deaths', value: response.deaths.toLocaleString(), inline: true },
                    { name: 'Current Cases', value: response.active.toLocaleString(), inline: true },
                    { name: 'Critical Cases', value: response.critical, inline: true },
                    { name: 'Total Tests', value: response.totalTests.toLocaleString(), inline: true },
                )
        
            message.channel.send({ emdeds: [exampleEmbed] });
        } catch (err) {
            message.channel.send('error: country not found.');
            console.log(err)
        }
    }
    getCases();
}