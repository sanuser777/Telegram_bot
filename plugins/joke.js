module.exports = (bot) => {
  bot.onText(/\/joke/, (msg) => {
    const jokes = [
      '😂 കോപ്പിയടിക്കാൻ മടിയുള്ളവൻ ഒന്നും എഴുതാറില്ല!',
      '🤣 “കുളിച്ചിട്ടില്ല” എന്ന് പറയുന്നത് ഒരു വിവരണം മാത്രമാണ്, കുറ്റം അല്ല!',
      '😜 കോമഡി എവിടെയുണ്ട് എങ്കിൽ ഞാനും അവിടെ!'
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    bot.sendMessage(msg.chat.id, joke);
  });
};