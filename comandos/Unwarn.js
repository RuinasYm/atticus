//mejorar embed
const { MessageEmbed, Permissions } = require("discord.js")
const db = require("megadb")
const DB = new db.crearDB("Warns")

module.exports = {
    name: "unwarn",
    alias: [""],

    async execute (client, message, args) {
     
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("❌ ¡No tienes suficientes permisos para usar este comando!")
        const user = message.mentions.members.first()
        const member = message.mentions.members.first() || message.guild.chache.get(args[0])
        if(!user) return message.reply ("❌ ¡No se ha encontrado al usuario que has especificado!")

        if(member.roles.highest.position >= message.member.roles.highest.position)
        return message.reply("❌ ¡Tu rol está por debajo del usuario que quieres warnear!")

        if(member === message.member)
        return message.reply("❌ ¡No te puedes warnear a ti mismo!")

        const razon = args.join(" ").slice(22)
        if(!razon) return message.reply("❌ ¡No has especificado ninguna razón!")

        DB.restar(user.id, 1)

        const embed = new MessageEmbed()
            .setDescription(`Se elemiminó un warn a ${user} por ${message.author}`)
            .setColor("FFFFFF")
            .setTimestamp()

            message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
}