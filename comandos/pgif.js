//falta mejorar embed
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "porn",
  aliases: [],
  async execute (client, message, args) {

    const image = await nsfw.pussy();
       const embed = new MessageEmbed()
       .setTitle('xd')
       .setColor('WHITE')
       .setImage(await nsfw.pgif())
       message.channel.send({ embeds: [embed] });
    }
}