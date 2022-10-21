const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "say",//Nombre del comando
  alias: ["decir"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

if(message.author.id !== "598270518009004062") return message.channel.send("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")

const escribe = args.slice(0).join(' ')
if(!escribe) return message.channel.send("**<:x_:1030676024662442065> | No expecificaste un Texto a decir! | <:x_:1030676024662442065>**")
message.delete()
message.channel.send(escribe)
    
  }

}