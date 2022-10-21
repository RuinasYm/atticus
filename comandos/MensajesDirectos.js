const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "md",//Nombre del comando
  alias: ["mensaje-directo"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

if(message.author.id !== "598270518009004062") return message.channel.send("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")
const userID = args[0]
if(!userID) return message.channel.send("**<:x_:1030676024662442065> |  Deves Mencionar o agregar la Id de algun Usuario! | <:x_:1030676024662442065>**")
const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
const mensaje = args.slice(1).join(" ")
if(!mensaje) return message.reply("**<:x_:1030676024662442065> |  No Has ingresado ningun Texto! | <:x_:1030676024662442065>**")
if(!user) return message.reply("**<:x_:1030676024662442065> |  Introduce un Nombre de usuaio Valido! | <:x_:1030676024662442065>**")

const embed = new Discord.MessageEmbed()
.setTitle(`Desde el Servidor: ${message.guild.name}`)
.setDescription(mensaje)
.setColor("e60ad4")
.setFooter("Gracias por Preferirnos")
.setTimestamp()
message.delete()

user.send({ embeds: [embed] })
message.channel.send("**<:gg:1018318507114500136> | Se envio correctamente tu Mensaje! | <:gg:1018318507114500136>**")
  }

}