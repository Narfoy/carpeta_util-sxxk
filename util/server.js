const Discord = require("discord.js")
const ms = require("parse-ms")
const moment = require("moment")
const db = require("megadb")
let comandos_db = new db.crearDB("Comandos")

module.exports = {
  config: {
    nombre: "server",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  let obtener = await comandos_db.obtener(message.guild.id) //Obtenemos el valor de la db
  if(!obtener) return;
    
  var server = message.guild;
    
  let verifLevels = [
        "Ninguno",
        "Bajo",
        "Medio",
        "Alto",
        "Muy alto"
      ]
  
  let embed = new Discord.MessageEmbed()
  .addField(`**${server.name}**`, `**ID**: ${server.id}\n**Dueño**: ${message.guild.owner.user.tag}\n**Creado el:** ${server.joinedAt.toDateString()}`)
  .addField(`**Estadísticas**`, `**Usuarios**: ${server.memberCount}\n**Humanos**: ${message.guild.members.cache.filter(member => !member.user.bot).size}\n**Bots**: ${message.guild.members.cache.filter(member => member.user.bot).size}\n**Canales de texto**: ${server.channels.cache.filter(c => c.type === 'text').size}\n**Canales de voz**: ${server.channels.cache.filter(c => c.type === 'text').size}`, true)
  .addField(`**Detalles**`, `**Región**: ${server.region}\n**Roles**: ${server.roles.size}\n**Nivel de Verificación**: ${verifLevels[server.verificationLevel]}`, true)
  .addField('Random', moment.utc(message.guild.createdAt).format('DD/MM/YYYY h:mm A'))
  .setColor('FF9185')
  .setFooter('Nagisa v1.0.0', client.user.avatarURL)
  
  
  message.channel.send(embed)
}
}