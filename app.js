const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const music = require('discord.js-music');
const fs = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Music/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./Music/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(settings.token);
