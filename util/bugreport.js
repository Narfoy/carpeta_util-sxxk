const MessageEmbed = require("discord.js")
const DB = require('simple-json-db');
const db = new DB('../../Data/suggestions.json');

module.exports = {
  config: {
    nombre: "bugreport",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
    let channel = client.channels.cache.get('')

    if (!args[0]) return message.channel.send('Debes introducir una sugerencia.')
    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle('Nueva sugerencia')
    .setColor('BLUE')
    .setDescription(args.join(' '))
    .addField('Servidor', message.guild.name)
    let msg = await channel.send(embed)
    await msg.react('??');
    await msg.react('??');
    db.set(msg.id, {
      message: msg.id,
      content: args.join(' '),
      user: msg.author.id
    });
  }
}