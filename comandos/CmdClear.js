const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "clear",
    alias: [],
    async execute (client, message, args) {

        try {
            const cantidad = args[0];
            if (!cantidad) return message.reply('**<:x_:1030676024662442065> |  Debes especificar la cantidad de mensaje a Eliminar! | <:x_:1030676024662442065>**');
            if (isNaN(cantidad)) return message.reply('**<:x_:1030676024662442065> |  Debes especificar la cantidad de mensaje a Eliminar! | <:x_:1030676024662442065>**');
            if (cantidad > 100) return message.reply('**<:x_:1030676024662442065> |  Mo puedes eliminar mas de 100 mensajes a la Vez! | <:x_:1030676024662442065>**');
            message.delete().then(() => {
                message.channel.bulkDelete(cantidad);
                message.channel.send({ embeds: [new Discord.MessageEmbed()
                    .setAuthor("CLEAR", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                    .setDescription(`**Elimine:** \`\`${cantidad}\`\` mensajes`)
                    .setFooter("Gracias por Preferirnos")
                    .setColor("e60ad4")
                    .setTimestamp(),
                ] }).then(msg => {
                    setTimeout(() => msg.delete(), 8000);
                });
            });
        }
        catch (err) {
            console.log(err);
        }
    },

};