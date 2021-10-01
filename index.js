import Discord from "discord.js";
import { config } from "dotenv";

import { helpCommand, helpModeration } from "./commands/help.js";
import memeCommand from "./commands/meme.js";
import muteCommand from "./commands/mute.js";
import prayCommand from "./commands/pray.js";
import banCommand from "./commands/ban.js";
import jokeCommand from "./commands/joke.js";
import kickCommand from "./commands/kick.js";
import fortuneCommand from "./commands/fortune.js";
import coronaCommand from "./commands/coronavirus.js";
import weatherCommand from "./commands/weather.js";
import currencyCommand from "./commands/currency.js";
import unmuteCommand from "./commands/unmute.js";

const logging = "893134528359591966";

const intents = new Discord.Intents(32767);
const client = new Discord.Client({
  intents,
  ws: { properties: { $browser: "Discord iOS" } },
});

client.on("ready", () => {
  console.log("connected as " + client.user.tag);

  //   const exampleEmbed = new Discord.MessageEmbed()
  //   .setColor('#F7A8B8')
  //   .setTitle('Verification questions')
  //   .setAuthor('Doge (عليه السلام)', 'https://cdn.discordapp.com/icons/853208751569633281/d4074965863627ac98b68c0122c24558.webp?size=256')
  //   .setDescription("1. Where are you from?\n2. How'd you find this server?\n3. Do you agree with the rules?")

  //   client.channels.cache.get('893182783063740446').send({ embeds: [exampleEmbed] })
});

client.on("messageDelete", (message) => {
  if (message.author === client.user) return;

  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL()
    )
    .setDescription(
      `**Message deleted by <@${message.author.id}> in <#${message.channelId}>**\n${message.content}`
    )
    .setFooter(`Author ID: ${message.author.id} | Message ID: ${message.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("roleCreate", (role) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(role.guild.name, role.guild.iconURL())
    .setDescription(
      `**Role '${role.name}' created**\ncolor: ${role.hexColor}**`
    )
    .setFooter(`Role ID: ${role.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("roleDelete", (role) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(role.guild.name, role.guild.iconURL())
    .setDescription(
      `**Role '${role.name}' deleted**\ncolor: ${role.hexColor}**`
    )
    .setFooter(`Role ID: ${role.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("roleUpdate", (oldRole, newRole) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(oldRole.guild.name, oldRole.guild.iconURL())
    .setDescription(
      `**Role '${oldRole.name}' updated**\ncolor: ${oldRole.hexColor}**`
    )
    .setFooter(`Role ID: ${oldRole.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("guildBanAdd", (ban) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(
      `${ban.user.username}#${ban.user.discriminator}`,
      ban.user.displayAvatarURL()
    )
    .setDescription(`**<@${ban.user.id}> was Banned.**\nReason: ${ban.reason}`)
    .setFooter(`User ID: ${ban.user.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("guildBanRemove", (ban) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(
      `${ban.user.username}#${ban.user.discriminator}`,
      ban.user.displayAvatarURL()
    )
    .setDescription(
      `**<@${ban.user.id}> was Unbanned.**\nReason: ${ban.reason}`
    )
    .setFooter(`User ID: ${ban.user.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("guildMemberRemove", (member) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setDescription(`**<@${member.id}> has left the server!**`);

  client.channels.cache.get(logging).send({ embeds: [embed] });
  client.channels.cache.get("893134097998827651").send({ embeds: [embed] });
});

client.on("inviteCreate", (invite) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setDescription(`**${invite.inviter} has created an invite!**`);

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("channelCreate", (channel) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setDescription(`**Channel <#${channel.id}> has been created**`);

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("channelDelete", (channel) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setDescription(`**Channel <#${channel.id}> has been deleted**`);

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("guildMemberAdd", (member) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setDescription(`**<@${member.id}> has joined the server!**`);

  client.channels.cache.get(logging).send({ embeds: [embed] });
  client.channels.cache.get("893134097998827651").send({ embeds: [embed] });

  // member.roles.add(member.guild.roles.cache.find((r) => r.name === "guest 💖"));
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#F7A8B8")
    .setAuthor(
      `${oldMessage.author.username}#${oldMessage.author.discriminator}`,
      oldMessage.author.avatarURL()
    )
    .setDescription(
      `**Message edited by <@${oldMessage.author.id}> in <#${oldMessage.channelId}>**`
    )
    .setFields([
      {
        name: "**Before:**",
        value: oldMessage.content,
      },
      {
        name: "**After:**",
        value: newMessage.content,
      },
    ])
    .setFooter(`Author ID: ${oldMessage.author.id}`)
    .setTimestamp();

  client.channels.cache.get(logging).send({ embeds: [embed] });
});

client.on("messageCreate", (message) => {
  if (message.author === client.user) {
    return;
  }

  // client.user.setUsername("Doge (عليه السلام)")

  if (message.content.startsWith(">")) {
    processCommand(message);
  }
});

function processCommand(message) {
  const fullCommand = message.content.substr(1);
  const splitCommand = fullCommand.split(" ");
  const primaryCommand = splitCommand[0];
  const args = splitCommand[1];

  switch (primaryCommand) {
    case "help":
      helpCommand(message);
      break;
    case "meme":
      memeCommand(message);
      break;
    case "joke":
      jokeCommand(message);
      break;
    case "pray":
      prayCommand(message);
      break;
    case "fortune":
      fortuneCommand(message);
      break;
    case "corona":
      coronaCommand(message, args);
      break;
    case "weather":
      weatherCommand(message, args);
      break;
    case "convert":
      currencyCommand(message, splitCommand);
      break;
    case "mod":
      helpModeration(message);
      break;
    case "kick":
      kickCommand(message);
      break;
    case "ban":
      banCommand(message);
      break;
    case "mute":
      muteCommand(message);
      break;
    case "unmute":
      unmuteCommand(message);
      break;
    default:
      return;
  }
}

config();

client.login(process.env.TOKEN);
