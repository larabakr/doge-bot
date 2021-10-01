export default function banCommand(message) {
  if (
    message.member.roles.cache.some(
      (role) => role.name === "internet janitors 💅🏻"
    )
  ) {
    const user = message.mentions.users.first();
    const member = message.guild.members.resolve(user);

    member
      .ban({
        reason: message.content.split(" ")[2],
      })
      .then(() => message.channel.send(`Successfully banned **${user.tag}**`))
      .catch(() => message.channel.send(`Could not ban **${user.tag}**`));
  }
}
