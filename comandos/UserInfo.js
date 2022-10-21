const Discord = require('discord.js');

module.exports = {
  name: "userinfo", 
  alias: [], 

execute (client, message, args){

  const usuario = message.mentions.members.first() || message.member

  const embed = new Discord.MessageEmbed()
  .setAuthor("User Info", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
  .setDescription(`**Nombre:** \`\`${usuario.user.tag}\`\` \n**ID:** \`\`${usuario.user.id}\`\` \n**Etiqueta:** #\`\`${usuario.user.discriminator}\`\``)
  .setThumbnail(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
  .setColor("e60ad4")
  .setTimestamp()
  .setFooter("Gracias por Preferirnos")

  message.channel.send({embeds: [embed]})

 }

} 