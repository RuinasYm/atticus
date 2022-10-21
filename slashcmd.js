const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId } = require('./config.json')
const commands = []
const slashcommandsFile = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsFile){
    const slash = require(`./slashcmd/${file}`)
    commands.push(slash.data.toJSON())

}

const rest = new REST({ version: "9"}).setToken("OTk2NDk0NTQwMDY2Mjc5NDI1.Gv-OtZ.wcNH54eL0HjJ2U7UAqW2_usMVWm5hAMc7r1NiY")

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId), {
                body: commands
            }
        )
        console.log("Slash cmd Agregados")
    } catch(e) {
        console.error(e)
    }
}