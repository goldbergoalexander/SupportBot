'use strict'

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '674962170:AAHUr6Fy15a47n2-GLLstH96TawRDq5xpmU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



module.exports = {bot:bot};

