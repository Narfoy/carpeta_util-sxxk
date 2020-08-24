const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "ping",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  let ping = Math.floor(message.client.ping);
  
  message.channel.send('...')
  .then(m => {
    m.edit(`:dango: Command Delay: **${m.createdTimestamp - message.createdTimestamp}ms**\n:incoming_envelope: Gateway Ping: **${ping}ms**`)
  })
}
}