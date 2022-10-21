const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const { mem, cpu, os } = require('node-os-utils'); //npm i node-os-utils
const { stripIndent } = require('common-tags'); //npm i common-tags


module.exports = {
  name: "botinfo",//Nombre del comando
  alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) { 

const { totalMemMb, usedMemMb } = await mem.info();

const embed = new Discord.MessageEmbed()
.setTitle(`Bot Info: ${message.guild.name}`)
.addField("RAM USADA:", `${usedMemMb} MB`) 
.addField("CPU Usada:", `${await cpu.usage()} %`) 
.setThumbnail("https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.png?size=1024")
.setColor("e60ad4")
.setFooter("Gracias por Preferirnos")
.setTimestamp()


/*const systeminfo = stripIndent`
CPU       : ${cpu.model()}
Cores     : ${cpu.count()}
CPU Usada : ${await cpu.usage()} %
RAM       : ${totalMemMb} MB
Ram Usada : ${usedMemMb} MB

.addField("CPU:", `${cpu.model()}`) 
.addField("Cores:", `${cpu.count()}`) 
.addField("CPU Usada:", `${await cpu.usage()} %`) 
.addField("RAM:", `${totalMemMb} MB`) 
.addField("RAM USADA:", `${usedMemMb} MB`) 

.addField(`**ID:** 996494540066279425`)
.addField(`**Versión:** 1.0`)
.addField(`**Creación:** 6/12/22`)
.addField(`**Developer:**`)
`;
*/

message.channel.send({ embeds: [embed] })
    
  }

}
 
