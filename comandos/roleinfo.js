//mejorar embed
const Discord = require('discord.js')

module.exports = {
    name: "roleinfo",
    aliases: ["ri", "rinfo", "role-info"],
    desc: "Muestra información sobre un rol",
    category: "💡 Información",
    usage: "roleinfo <@rol/ID>",
    async execute (client, message, args) {

const role = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first();

  if(!args[0]) return message.reply(`<a<:no:929001012478509077>960351541825507368> | Debes **especificar un rol** para ver su información`);

  if(!role) return message.reply(`<a<:no:929001012478509077>960351541825507368> | El rol no es válido`);
  const embed = new Discord.MessageEmbed()
  .setDescription(`Información del rol ${role.name}`)
  .addField(`Nombre`, `<@&${role.id}>`)
  .addField(`ID`, `${role.id}`)
.addField(`Color hex`, `${role.hexColor}`)
  .addField(`Creación`, `<t:${parseInt(role.createdTimestamp / 1000)}:f> (<t:${parseInt(role.createdTimestamp / 1000)}:R>)`)
.addField(`Usuarios con este rol`, `${role.members.size} usuario(s)`)
  .addField(`¿Mencionable?`, `${role.mentionable ? "✅ Si" : "❌ No"}`)
.setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true })})
  .setColor("RANDOM")
  .setTimestamp()

  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
    }