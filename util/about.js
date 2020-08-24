const Discord = require("discord.js")
const megadb = require("megadb")
const rsupport = new megadb.crearDB("rsupport")

module.exports = {
  config: {
    nombre: "about",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription('Hola, soy Saek un poderoso **bot multipropósitos**.\nY fui creada para hacerles el trabajo más fácil y a los administradores de todos los servidores de Discord.')
  .addField('Información', `<:owner:723932695532666904> **Desarrollador:** elnombredefission#1234\n<:web:723932741346918412> **Sitio Web:** <Link>\n<:discord:723932774234587156> **Servidor Oficial:** <link>`, true)
  .addField('Estadísticas', `<:servers:723933940968325170> **Servidores:** ${client.guilds.cache.size.toLocaleString()}\n<:channels:723933973029322865> **Canales:** ${client.channels.cache.size.toLocaleString()}\n<:members:723934011277312060> **Usuarios:** ${client.users.cache.size.toLocaleString()}`, true)
  .addField('Equipo', `Desarrollador: asdasdasdasd\nACÁLODEMÁS XDDD`)
  .setColor('FF9185')
  .setFooter('Versión 1.0')
  
  message.channel.send(embed)
}
}