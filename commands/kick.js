export default function kickCommand(message) {
  if (
    message.member.roles.cache.some(
      (role) => role.name === "internet janitors 💅🏻"
    )
  ) {
    const user = message.mentions.users.first();
    const member = message.guild.members.resolve(user);

    member
      .kick({
        reason: message.content.split(" ")[2],
      })
      .then(() => message.channel.send(`Successfully kicked **${user.tag}**`))
      .catch(() => message.channel.send(`Could not kick **${user.tag}**`));
  }
}
