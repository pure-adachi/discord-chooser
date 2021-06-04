const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", () => {
  client.user.setPresence({ game: { name: "chooser" } });
});

client.on("message", (message) => {
  const memtion = message.mentions.members.first();

  if (!memtion) return;
  if (memtion.user.id !== client.user.id) return;
  if (message.author.id === client.user.id) return;

  const channels = message.guild.channels;
  const voiceChannel = channels.cache.find((ch) => {
    if (ch.type !== "voice") {
      return false;
    }

    return ch.members.some((member) => member.user.id === message.author.id);
  });

  if (voiceChannel) {
    const members = voiceChannel.members.map(
      (member) => member.nickname || member.user.username
    );
    const length = members.length;
    const rand = Math.floor(Math.random() * length);

    message.channel.send(`選ばれたのは ${members[rand]} さんです。`);
  } else {
    message.reply("ボイスチャンネルに入室しましょう");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
