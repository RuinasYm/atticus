const { Client, Message } = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "slowmode",
    alias: ["sm"],

    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    async execute (client, message, args) {
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply("**<:x_:1030676024662442065> |  Especifica el tiempo de Duracion! | <:x_:1030676024662442065>**")
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return message.reply("**<:x_:1030676024662442065> |  Introduce un tiempo Valido! | <:x_:1030676024662442065>**")
        if(milliseconds < 1000) return message.reply("**<:x_:1030676024662442065> |  El tiempo minimo de SlowMode es de 1 segundo! | <:x_:1030676024662442065>**");

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.reply(`**<:gg:1018318507114500136> | Slow Mode activado correctamente Por: \`${ms(milliseconds, {
            long: true
        })}\` | <:gg:1018318507114500136>**`)
    }
}