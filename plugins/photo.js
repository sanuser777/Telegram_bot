module.exports = (bot) => {
  bot.onText(/\/photo/, (msg) => {
    bot.sendPhoto(msg.chat.id, 'https://placekitten.com/400/400', {
      caption: 'ഇത് ഒരു ക്യൂട്ട് പൂച്ചയാണ് 🐱'
    });
  });
};