const { SlashCommandBuilder } = require("@discordjs/builders")
const { Permissions } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Expulsa a un Usuario!")
        .addUserOption(option => option.setName("user").setDescription("elije a un usuario").setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("dijita tu razon").setRequired(true)),
    

    async run(client, interaction){

        await interaction.deferReply()

        const usuario = interaction.options.getMember("user")

        const razon = interaction.options.getString("reason")
 
        if(usuario.id === interaction.user.id) return interaction.editReply({ content: "no tienes permisos", ephemeral: true })

        if(!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.editReply({ content: "no tienes permisos", ephemeral: true })

        if(!interaction.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.editReply({ content: "no tengo permisos a", ephemeral: true })

        if(!interaction.guild.me.roles.highest.comparePositionTo(usuario.roles.highest) <= 0) return interaction.editReply({ content: "no tengo permisos aa", ephemeral: true })

        if(!usuario.kickable) return interaction.editReply({content: "no  puedo a ese persona", ephemeral: true })

        try {
            usuario.kick({ reason : razon})
            const embed = new Discord.MessageEmbed()
            .setDescription(`${usuario.user.tag} ha sido kikeado por ${interaction.user.tag}`)
            .setTimestamp()
            .setAuthor("KICK", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setFooter("Gracias por Preferirnos")
            .setColor("e60ad4")
            .setImage("https://cdn.discordapp.com/attachments/996597249322778674/1031305723952517322/CLUB_ATTICUS.png")
            
            await interaction.followUp({ embeds: [embed] })
        } catch (e) {
            console.error(e)
        }
    }

    }