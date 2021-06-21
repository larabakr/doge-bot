export default function kickCommand(message) {
    const { mentions } = message;
    const target = mentions.users.first();

    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')) {
        if (target) {
            try { 
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.kick();
                message.channel.send(`<@${targetmember.user.id}> has been kicked.`)
            } catch(err) { message.channel.send("User couldn't get kicked.") }
        } else {
            message.channel.send('Could not find user.')
        }
    } else {
        message.channel.send(`${message.author.toString()} you can't use this command!`)
    }
}