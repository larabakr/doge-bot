import Discord from 'discord.js'

export function helpCommand(message) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#F7A8B8')
	.setTitle('Commands List')
	.addFields(
		{ name: 'Meme command', value: '>meme' },
        { name: 'Random joke command', value: '>joke' },
        { name: 'Fortune command', value: '>fortune' },
        { name: 'Coronavirus cases command', value: '>corona [Country]' },
        { name: 'Prayer command', value: '>pray' },
        { name: 'Weather command', value: '>weather [City]' },
        { name: 'Currency command', value: '>convert [Amount] [Base currency] [Target currency]' },
	)

    message.channel.send({
        embeds: [exampleEmbed]
    });
}

export function helpModeration(message) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#F7A8B8')
	.setTitle('Moderation commands List')
	.addFields(
		{ name: 'Ban command', value: '>ban @user' },
        { name: 'Kick command', value: '>kick @user' },
        { name: 'Mute command', value: '>mute @user' },
        { name: 'Unmute command', value: '>unmute @user' },
	)

    message.channel.send(exampleEmbed);
}