const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "reporte", // Nombre del comando
  alias: [], // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args) {

    let bug = args.slice(0).join(" ")
    if(!bug) return message.reply("**<:x_:1030676024662442065> |  Debes ingresar tu Reporte! | <:x_:1030676024662442065>**")


      const embed = new Discord.MessageEmbed()
      .setAuthor("Nuevo Reporte", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
      .setDescription(`${bug}`)
      .addField("Reportado por:", `${message.author}`)
      .setFooter("Gracias por Preferirnos")
      .setColor("e60ad4")
      .setTimestamp()
      message.delete()

      message.channel.send("**<:gg:1018318507114500136> | Se envio correctamente tu Reporte! | <:gg:1018318507114500136>**")
      client.channels.cache.get("1032034054889033820").send({embeds: [embed]})
  }
}