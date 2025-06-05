// plugins/menu.js

const commands = require('../commands'); // commands array/object നിന്റെ project structure അനുസരിച്ച് മാറ്റുക

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = {
  command: 'menu',
  handler: async (ctx) => {
    try {
      const stars = ['✦','✯','✯','✰','◬','✵'];
      const star = stars[Math.floor(Math.random() * stars.length)];

      const useArr = commands.map(e => e.use || '');
      const others = (use) => use === '' ? 'others' : use;
      const types = shuffleArray([...new Set(useArr.map(others))]);

      const cmdObj = {};
      for (const cmd of commands) {
        const typeDet = types.includes(cmd.use) ? cmd.use : 'others';
        if (!cmdObj[typeDet]) cmdObj[typeDet] = [];
        let cmdName = '';
        if (cmd.pattern) {
          const match = cmd.pattern.toString().match(/(\W*)([A-Za-z0-9 ]*)/);
          cmdName = match && match[2] ? match[2].trim() : '';
        }
        if (cmdName) cmdObj[typeDet].push(cmdName);
      }

      let final = '';
      let i = 0;
      for (const n of types) {
        for (const x of cmdObj[n] || []) {
          i++;
          const newn = n.charAt(0).toUpperCase() + n.slice(1);
          final += `${final.includes(newn) ? '' : `\n\n╭════〘 *_${newn}_* 〙════⊷❍\n`}\n┃${star}│ _${i}. ${x}_` + 
            (cmdObj[n].indexOf(x) === cmdObj[n].length -1 ? `\n┃${star}╰─────────────────❍\n╰══════════════════⊷❍` : '');
        }
      }

      const menuText = final.trim();

      const BOT_INFO = process.env.BOT_INFO || 'MyBot;OwnerName;info;https://picsum.photos/800/500';
      const [botName, ownerName] = BOT_INFO.split(';');

      const messageText = `╭═══〘 ${botName} 〙═══⊷❍
┃${star}╭──────────────
┃${star}│
┃${star}│ _*Owner*_ : ${ownerName}
┃${star}│ _*User*_ : ${ctx.from?.first_name || 'User'}
┃${star}│ _*Mode*_ : ${process.env.MODE || 'public'}
┃${star}│
┃${star}╰───────────────
╰═════════════════⊷

${menuText}`;

      const imageUrl = BOT_INFO.split(';')[3] || 'https://picsum.photos/800/500';

      await ctx.replyWithPhoto({ url: imageUrl }, { caption: messageText, parse_mode: 'Markdown' });
    } catch (e) {
      console.error(e);
      await ctx.reply('കുറച്ച് പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കൂ.');
    }
  }
};
