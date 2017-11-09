var bot = require("discord-music-bot");
var serverName = "Enter Server Name";
var textChannelName = "Enter Bot Channel";
var voiceChannelName = "Voice Channel Name";
var aliasesFile = "alias.js";
var botToken = "Bot Token";

bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
bot.setYoutubeKey("YouTube API Key");

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'music',
  description: 'Music Commands',
  usage: 'play <link/song name>'
};
