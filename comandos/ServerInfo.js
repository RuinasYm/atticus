
const day= require("dayjs")

module.exports = {
  name: "server-info",//Nombre del comando
  alias: ["serverinfo"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")

const owner = message.guild.fetchOwner()
const createsv = day(message.guild.createdAt).format("DD/MM/YY")

const info = new Discord.MessageEmbed()
.setTitle("Informacion del Servidor")
.setThumbnail(message.guild.iconURL()) 
.setColor("e60ad4")  
.setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
.setTimestamp()
.addFields(
    {name: "Nombre del Servidor:", value: `${message.guild.name}`, inline: true},
    {name: "Numero de canales:", value: `${message.guild.channels.cache.size}`, inline: true},
    {name: "Owner:", value: `${await message.guild.fetchOwner()}`, inline: true},
    {name: "Miembros:", value: `${message.guild.memberCount}`, inline: true},
    {name: "Roles:", value: `${message.guild.roles.cache.size}`, inline: true},
    {name: "ID del Servidor:", value: `${message.guild.id}`, inline: true},
    {name: "Fecha de Creacion:", value: `${createsv}`, inline: true},
    {name: "Emojis:", value: `${message.guild.emojis.cache.size}`, inline: true},
    {name: "Bots:", value: `${message.guild.members.cache.filter(m => m.user.bot).size}`, inline: true},
    {name: "Boost:", value: `${message.guild.premiumSubscriptionCount.toString()}`, inline: true},

)

message.reply({ embeds: [info] })

  }

}