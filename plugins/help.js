module.exports = (bot) => {
  bot.onText(/\/help/, (msg) => {
    const text = `
ℹ️ സഹായം:
👉 /start - ആരംഭിക്കുക
👉 /help - സഹായം
👉 /photo - ചിത്രം കാണിക്കുക
👉 /joke - തമാശ പറയൂ
    `;
    bot.sendMessage(msg.chat.id, text);
  });
};