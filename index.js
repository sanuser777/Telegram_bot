const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // Render-ൽ സെറ്റാകുന്ന ടോക്കൺ
const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  const name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, `ഹലോ ${name}! ഞാൻ ടെലഗ്രാം ബോട്ട് ആണ് 😊`);
});
