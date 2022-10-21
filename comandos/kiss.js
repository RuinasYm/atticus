//mejorar embed
const Discord = require('discord.js')
const db = require('megadb')
const beso = new db.crearDB('beso')
const anime = require('anime-actions')

module.exports = {
  name: "kiss",
  alias: [],
  timeout: 1000 * 3,
  owner: false,
  permissions: [],
  botpermissions: [],
  descripcion: "Besas a la persona mencionada.",
  async execute(client, message, args) {
    const user = await message.mentions.users.first()
    let aA = message.author;
     
     let aB = message.mentions.users.first()
     if(!aB) return message.reply("**<:x_:1030676024662442065> |  Debes nombrar a un usuario que quieras Besar! | <:x_:1030676024662442065>**")
     if (user.id == message.author.id) return message.channel.send("**<:x_:1030676024662442065> |  No te puedes besar a ti Mismo! | <:x_:1030676024662442065>**")
     if(!beso.tiene(`${aA.id}.${aB.id}`)){
         beso.establecer(`${aA.id}.${aB.id}.cant`, 0)
       }
      
      beso.sumar(`${aA.id}.${aB.id}.cant`, 1)

      const besos = await beso.obtener(`${aA.id}.${aB.id}.cant`)
    if(!beso.tiene(`${aB.id}.${aA.id}`)){
         beso.establecer(`${aB.id}.${aA.id}.cant`, 0)
       }
      
      beso.sumar(`${aB.id}.${aA.id}.cant`, 1)

     const embed = new Discord.MessageEmbed()
     .setAuthor(`Kiss`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
     .setDescription(`${aA.username}} beso a ${aB.username} ${besos} Veces`)
     .setColor("e60ad4")
     .setTimestamp()
     .setFooter("Gracias por Preferirnos")
     .setImage(await anime.kiss())
     message.reply({ embeds: [embed] })
  }
}