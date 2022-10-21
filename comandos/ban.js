///////////////////////mejorar embed
const Discord = require('discord.js');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');

module.exports = {
    name: "ban",
    aliases: [""],
    desc: "Banea a un Usuario del servidor.",
   async execute (client, message, args, prefix) {
        ////////////////////CONST CONST CONST CONST// ///////////////
        const perms = message.member.permissions.has("BAN_MEMBERS");
        const perms_bot = message.guild.me.permissions.has("BAN_MEMBERS");
        const moderador = message.author;
        const razon = args.slice(1).join(' ') || 'No reason was provided'
        const usuario = message.mentions.members.first();

        ////////////////////////////////EMBEDS EMBEDS EMBEDS Y MÁS EMBEDS///////////////////////////////////////
        let error = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("Necesito permisos. Los permisos necesarios son: `BAN_MEMBERS`")
        .setColor("RED")

        let error1 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("Necesitas permisos. Los permisos necesarios son: `BAN_MEMBERS`")
        .setColor("RED")

        let error2 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("Debes mencionar a un Usuario validó")
        .setColor("RED")

        let error3 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("No puedes banearte ati mismo")
        .setColor("RED")

        let error4 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("No me puedo autobanear")
        .setColor("RED")

        let error5 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("No puedes banear a `ADMINISTRADORES`")
        .setColor("RED")

        let error6 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("No puedes banear a alguien con tu mismo Rol o superior")
        .setColor("RED")

        let error7 = new Discord.MessageEmbed()
        .setTitle(":x: Acaba de ocurrir un error:")
        .setDescription("No puedo banear a un Usuario con un Rol superior al mío")
        .setColor("RED")


        //////////////////////////////IF IF IF IF IF IF IF IF !IF //////////////////////////////////////////////////////////////////
        if(!perms) return message.reply({ embeds: [error1] })
        if(!perms_bot) return message.reply({ embeds: [error] })
        if(!usuario) return message.reply({ embeds: [error2] })
        if(usuario.user.id === message.author.id) return message.reply({ embeds: [error3] })
        if(usuario.user.id === client.user.id) return message.reply({ embeds: [error4] })
        if(usuario.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [error5] })
        if(message.member.roles.highest.position <= usuario.roles.highest.position) return message.reply({ embeds: [error6] })
        if(message.guild.me.roles.highest.position <= usuario.roles.highest.position) return message.reply({ embeds: [error7] })

        ////////////////////SI FUNCIONA TODO, SEGUIMOS CON EL PROCEDIMIENTO////////////////////
        await usuario.ban({ reason: `${message.author.tag} - ${razon}` })
        const banEmbed = new Discord.MessageEmbed()
        .setTitle("⛔ Miembro Baneado ⛔")
        .setDescription(`Un Usuario fue removido del servidor.\n\nInformación:\n- Moderador: ${moderador.tag}\n- Id del Moderador: ${moderador.id}\n- Usuario: ${usuario}\n- Id del Usuario: ${usuario.id}\n- Razón del baneo: ${razon}`)
        .setThumbnail(usuario.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Pedido por: ${message.author.tag}`)
        .setTimestamp()
        .setColor("GREEN")

        message.channel.send({ embeds: [banEmbed], content: `<@${usuario.id}>` })
    }
}