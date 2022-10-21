const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "send",//Nombre del comando
  alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

if(message.author.id !== "598270518009004062") return message.channel.send("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")

const channel = message.mentions.channels.first()
let sendch = message.guild.channels.cache.find(channeL => channeL.name === `${channeL}`)
const mensaje = args.slice(1).join(` `)
if(!channel) return message.reply("**<:x_:1030676024662442065> | Deves mencionar un Canal! | <:x_:1030676024662442065>**")
if(!mensaje) return message.reply("**<:x_:1030676024662442065> | No expecificaste un Texto a decir! | <:x_:1030676024662442065>**")

const embed = new Discord.MessageEmbed()
.setTitle(`Desde el Servidor: ${message.guild.name}`)
.setDescription(mensaje)
.setColor("e60ad4")
.setFooter("Gracias por Preferirnos")
.setTimestamp()

message.delete()
channel.send({ embeds: [embed] })
message.channel.send(`**<:gg:1018318507114500136> | Se envio correctamente tu mensaje a el Canal ${channel}! | <:gg:1018318507114500136>**`)
    
  }

}