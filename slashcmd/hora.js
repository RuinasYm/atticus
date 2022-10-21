const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("hora")
      .setDescription("Muestra la hora actual."),  
async run(client, interaction) {
  const embed = new Discord.MessageEmbed()
    .setTitle (`Hora Actual`)
    .setDescription(`**Hora: <t:${Math.round(Date.now()/1000)}:t>\n\nFecha: <t:${Math.round(Date.now()/1000)}:d>**`)    
    .setTimestamp()
    .setThumbnail("https://c.tenor.com/n-5biYcWQE0AAAAS/time-flies.gif")
    .setColor("GREEN")
 interaction.reply({embeds: [embed]})       
    }
};