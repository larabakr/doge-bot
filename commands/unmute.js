export default function unmuteCommand(message, args) {
    const target = message.mentions.users.first();

    if (message.member.hasPermission('ADMINSTRATOR') || message.member.hasPermission('MANAGE_MESSAGES')) {
        if (target) {
            const muted = message.guild.roles.cache.find(role => role.name === 'muted');
            const citizen = message.guild.roles.cache.find(role => role.name === 'member');
    
            try {
                const targetmember = message.guild.members.cache.get(target.id);
    
                targetmember.roles.remove(muted.id);
                targetmember.roles.add(citizen.id);
        
                message.channel.send(`<@${targetmember.user.id}> has been unmuted.`);
            } catch(err) { message.channel.send("User couldn't get unmuted.") }
        } else {
            message.channel.send("Could not find user.");
        }
    } else {
        message.channel.send(`${message.author.toString()} you can't use this command!`)
    }
}