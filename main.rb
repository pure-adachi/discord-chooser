require 'discordrb'

bot = Discordrb::Bot.new token: ENV['DISCORD_BOT_TOKEN']

bot.command :choose! do |event|
  event.respond 'TEST'
end

bot.run
