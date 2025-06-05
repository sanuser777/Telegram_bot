const ytsr = require('youtube-search-api');

module.exports = {
  command: 'song',
  handler: async (ctx) => {
    const query = ctx.message.text.replace('/song', '').trim();
    if (!query) {
      return ctx.reply('ദയവായി ഗാനംയുടെ പേര് ടൈപ്പ് ചെയ്യൂ. ഉദാഹരണം: /song Shape of You');
    }

    try {
      const results = await ytsr.GetListByKeyword(query, false, 1);
      if (results && results.items && results.items.length > 0) {
        const video = results.items[0];
        const title = video.title;
        const link = `https://www.youtube.com/watch?v=${video.id}`;
        ctx.reply(`🎵 ${title}\n${link}`);
      } else {
        ctx.reply('ക്ഷമിക്കണം, ആ ഗാനത്തിന് ഫലം കിട്ടിയില്ല.');
      }
    } catch (error) {
      console.error(error);
      ctx.reply('സെർവർ പ്രശ്നം, ദയവായി വീണ്ടും ശ്രമിക്കൂ.');
    }
  }
};
