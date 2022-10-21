const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "em",
  alias: [],
  async execute (client, message, args) {
    let msg = args.join(" ");
    if (!msg) return message.channel.send("Porfavor, envía el texto para que lo convierta en embed");

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.member.displayName} Escribio:`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
      .setDescription(`${msg}`)
      .setColor("e60ad4")
      .setFooter("Gracias por Preferirnos")
      .setTimestamp()

    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};