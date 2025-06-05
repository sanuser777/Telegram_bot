module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `ഹലോ ${msg.from.first_name}! ഞാൻ Telegram ബോട്ട് ആണ് 😊`);
  });
};