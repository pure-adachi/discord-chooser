require 'discordrb'

bot = Discordrb::Bot.new token: ENV['TOKEN']

bot.command :choose! do |event|
  event.respond 'TEST'
end

bot.run
