'use strict'

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '674962170:AAHNroMPFQN5mn2Nq3Z7teUFGS_estn_NOU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



module.exports = {bot:bot};

