//falta mejorar embed
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ntits",
  aliases: [],
  async execute (client, message, args) {


       const embed = new MessageEmbed()
       .setTitle('xd')
       .setColor('WHITE')
       .setImage(await nsfw.nekotits())
       message.reply({ embeds: [embed] });
    }
}