export default function muteCommand(message, args) {
    const target = message.mentions.users.first();

    if (message.author.hasPermission('ADMINSTRATOR') || message.author.hasPermission('KICK_MEMBERS')) {
        if (target) {
            const muted = message.guild.roles.cache.find(role => role.name === 'muted');
            const citizen = message.guild.roles.cache.find(role => role.name === 'member');
    
            try {
                const targetmember = message.guild.members.cache.get(target.id);
    
                targetmember.roles.remove(citizen.id);
                targetmember.roles.add(muted.id);
        
                message.channel.send(`<@${targetmember.user.id}> has been muted.`);
            } catch(err) { message.channel.send("User couldn't get muted.") }
        } else {
            message.channel.send("Could not find user.");
        }
    } else {
        message.channel.send(`${message.author.toString()} you can't use this command!`)
    }
}