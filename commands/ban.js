export default function banCommand(message) {
    const { mentions } = message;
    const target = mentions.users.first();

    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_MEMBERS')) {
        if (target) {
            try {
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.ban();
                message.channel.send(`<@${targetmember.user.id}> has been banned.`)
            } catch(err) { message.channel.send("User couldn't get banned.") }
        } else {
            message.channel.send('Could not find user.') 
        }
    } else {
        message.channel.send(`${message.author.toString()} you can't use this command!`)
    }
}