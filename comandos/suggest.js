const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const db = require("megadb")
const suggest = new db.crearDB("suggest")

module.exports = {
  name: "suggest",//Nombre del comando
  alias: ["sugerencia"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

const suge = args.slice(0).join(' ')
let canal = await suggest.obtener(message.guild.id)
let channel = client.channels.cache.get(canal)

if(!channel) return message.reply("**<:x_:1030676024662442065> | No hay ningun canal de sugerencias Establecido! | <:x_:1030676024662442065>**")
if(!suge) return message.reply("**<:x_:1030676024662442065> | No has escrito una Sugerencia! | <:x_:1030676024662442065>**")

let embed = new Discord.MessageEmbed()
.setTitle("Nueva Sugerencia!")
.setDescription(`${suge}`)
.setColor("e60ad4")
.setFooter(`Sugerencia echa por: ${message.author.tag}`)

channel.send({ embeds: [embed] }).then(m =>{
    m.react("👍")
    m.react("🤷‍♂️")
    m.react("👎")
}) 

message.reply(`**<:gg:1018318507114500136> | Se envio correctamente tu Sugerencia a el canal ${channel}! | <:gg:1018318507114500136>**`)


  }

}