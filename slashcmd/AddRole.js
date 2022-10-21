//mejorar embed
const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    
    .setName('addrole') // Seteamos el nombre
    .setDescription('Asigna un rol a un usuario') // La description
    .addUserOption(usuario => usuario.setName('usuario').setDescription('Asignale el rol al usuario').setRequired(true)) // Creamos la opcion para mencionar un usuario y que sea obligatorio
    .addRoleOption(role => role.setName('role').setDescription('Asigna el rol').setRequired(true)), // Creamos la otra opcion para poder mencionar el rol y que sea obligatorio.
    async run(client, interaction){
        const Target = interaction.options.getMember('usuario'); // Hacemos la opcion funcional, estableciendo un parametro
        const Role = interaction.options.getRole('role'); // Igual que el usuario, pero con un rol.

        if(interaction.member.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el del usuario.
            return interaction.reply({ content: "No puedes agregarle roles a este usuario", ephemeral: true });
        }
        if(interaction.guild.me.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el bot.
            return interaction.reply({ content: "No puedo agregarle un rol a este usuario", ephemeral: true });
        }
        if(interaction.guild.me.roles.highest.comparePositionTo(Role) <= 0){ // Si el rol no puee ser aregado.
            return interaction.reply({ content: "No puedo agregar este rol", ephemeral: true });
        }

        Target.roles.add(Role.id); // Agregamos el rol
        return interaction.reply({ content: `${interaction.user} agregó el rol \`${Role.name}\` a ${Target.user}`}); // Mandamos un mensaje despues de agregarlo
    }
}