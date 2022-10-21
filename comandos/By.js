const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "creditos",//Nombre del comando
  alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setTitle("CLUB ATTICUS") 
    .setThumbnail("https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.png?size=1024")
    .setImage("https://media.tenor.com/9_slb-5BWScAAAAC/mountain-rbg.gif") 
    .setColor("e60ad4") 
    .addField("Hola, Este es un Bot de discord dedicado a Ti!", "**Comandos:** Say, Server-info, Server-icon, Set-sugerencia, sugerencia, Creditos, MD, Send, Help, botinfo, canalinfo, hug, 8ball, reporte, hack,   **Mi prefijo es: !**") //siempre debe llevar dos lineas osea dos textos separados con comillas
    .setFooter("Code by: Club atticus") //footer del embed
    .setTimestamp(); //para que le salga la hora que lo ejecuto

    message.reply({ embeds: [embed] })
    
  }

}