const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help",//Nombre del comando
  alias: ["ayuda"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
  async execute (client, message, args) {

const start = new Discord.MessageEmbed()
.setAuthor("HELP", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
.setDescription("Si encuentras un problema reportalo con el comando `!reporte`, estos son mis comandos.")
.setColor("e60ad4")
.addField(`ㅤ`, "\n\n > <:Ayuda:1031296602037571685> Prefix: **!**")
.addField("**CATEGORIAS**:", `\`\`\`• Configuracion
• Backups
• Moderacion
• Bienvenidas
• Niveles
• Traductor
• Utilidad
• RolePlay
• Diversion
• Nsfw \`\`\``)
.setFooter("Gracias por Preferirnos")
.setTimestamp()
.addField(`ㅤ`, "\n\n > <:Global:1031307029408661564> Visita mi [**Discord**]\
(https://discord.gg/K6rB4pQ2jB) Oficial")
.setImage("https://cdn.discordapp.com/attachments/996597249322778674/1031305723952517322/CLUB_ATTICUS.png")
message.delete()

const row = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
    .setCustomId('Select')
    .setPlaceholder('Click aqui para elejir una categoria')
    .addOptions([
        {
            label: 'Menu Principal',
            description: '',
            value: 'test1',
            emoji: '🏡'
        },
        {
            label: 'Configuracion',
            description: '',
            value: 'test2',
            emoji: '⚙️'
        },
        {
            label: 'Backups',
            description: '',
            value: 'test3',
            emoji: '📁'
        },
        {
            label: 'Moderacion',
            description: '',
            value: 'test4',
            emoji: '🛡️'
        },
        {
            label: 'Bienvenidas',
            description: '',
            value: 'test5',
            emoji: '👋'
        },
        {
            label: 'Niveles',
            description: '',
            value: 'test6',
            emoji: '⬆️'
        },
        {
            label: 'Traductor',
            description: '',
            value: 'test7',
            emoji: '💬'
        },
        {
            label: 'Utilidad',
            description: '',
            value: 'test8',
            emoji: '🔎'
        },
        {
            label: 'Roleplay',
            description: '',
            value: 'test9',
            emoji: '🎭'
        },
        {
            label: 'Divercion',
            description: '',
            value: 'test10',
            emoji: '🎮'
        },
        {
            label: 'Nsfw',
            description: '',
            value: 'test11',
            emoji: '🔞'
        },

    ])
)

message.reply({ embeds: [start], components: [row] }).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id});
    collector.on("collect", async(i) => {
        if(i.values[0] === "test1"){
            m.edit({ embeds: [start]})
        }
        if(i.values[0] === "test2"){
            m.edit({ embeds: [t2embed]})
        }
        if(i.values[0] === "test3"){
            m.edit({ embeds: [t3embed]})
        }
        if(i.values[0] === "test4"){
            m.edit({ embeds: [t4embed]})
        }
        if(i.values[0] === "test5"){
            m.edit({ embeds: [t5embed]})
        }
        if(i.values[0] === "test6"){
            m.edit({ embeds: [t6embed]})
        }
        if(i.values[0] === "test7"){
            m.edit({ embeds: [t7embed]})
        }
        if(i.values[0] === "test8"){
            m.edit({ embeds: [t8embed]})
        }
        if(i.values[0] === "test9"){
            m.edit({ embeds: [t9embed]})
        }
        if(i.values[0] === "test10"){
            m.edit({ embeds: [t10embed]})
        }
        if(i.values[0] === "test11"){
            m.edit({ embeds: [t11embed]})

       }
    })
    const t1embed = new Discord.MessageEmbed()
    .setAuthor("Configuración", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField(`ㅤ`, "\n\n > <:Ayuda:1031296602037571685> Prefix: **!**")
    .addField("**Pagina Principal**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()

    const t2embed = new Discord.MessageEmbed()
    .setAuthor("Configuración", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()

    const t3embed = new Discord.MessageEmbed()
    .setAuthor("Backups", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t4embed = new Discord.MessageEmbed()

    .setAuthor("Moderación", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`•kick\n•nuke\n•ban\n•warn\n•unwarn\n•warns\n•clear\`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t5embed = new Discord.MessageEmbed()
    .setAuthor("Bienvenidas", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t6embed = new Discord.MessageEmbed()
    .setAuthor("Niveles", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t7embed = new Discord.MessageEmbed()
    .setAuthor("Traductor", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`• Configuracion
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto
    • Pronto \`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t8embed = new Discord.MessageEmbed()
    .setAuthor("Utilidad", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`•avatar\n•server-icon\n•botinfo\n•serverinfo\n•userinfo\n•ping\n•rolinfo\n•jail\n•creditos\n\`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t9embed = new Discord.MessageEmbed()
    .setAuthor("RolePlay", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`•dance\n•feed\n•hug\n•kiss\n•sleep\n•kill\`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t10embed = new Discord.MessageEmbed()
    .setAuthor("Diversion", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`•hack\n•8ball\n•gato\n•manco\n•pared\n•lucky\n•ppt\n•meme\n•boom\n•howgay\n•horoscopo\n•dado\n•banana\`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


    const t11embed = new Discord.MessageEmbed()
    .setAuthor("Nsfw", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription("Para mas informacion sobre un comando usa `!info (comando).`")
    .setColor("e60ad4")
    .addField("**Comandos**:", `\`\`\`•porn\n•anal\n•fourk\n•ass\n•gonewild\n•pussy\n•thigh\n•boobs\n•hass\n•hentai\n•hmidriff\n•hthigh\n•erokemo\n•kitsune\n•lewd\n•nfeet\n•npussy\n•ntits\n•solo\n•wallpaper\`\`\``)
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()


})



    
  }

}