const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

require('./plugins/start')(bot);
require('./plugins/help')(bot);
require('./plugins/photo')(bot);
require('./plugins/joke')(bot);