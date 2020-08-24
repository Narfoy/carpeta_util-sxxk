const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "role",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  let role = message.mentions.roles.first()
  
  
  let embed = new Discord.RichEmbed()
  .addField(`**Nombre**`, `${role.name}`, true)
  .addField(`**ID**`, `${role.id}`, true)
  .addField(`**Creado**`, `${role.createdAt}`)
  .addField(`**Miembros**`, `${role.members}`, true)
  .addField(`**Posición**`, `${role.position}`, true)
  .addField(`**Color**`, `Hex: ${role.hexColor}`, true)
  .addField(`**Separado**`, `${role.hoist ? 'Si' : 'No'}`, true)
  .addField(`**Gestionado**`, `${role.managed ? 'Si' : 'No'}`, true)
  .addField(`**Mencionable**`, `${role.mentionable ? 'Si' : 'No'}`, true)
  .setColor(role.color)
  
  message.channel.send(embed)
}
}