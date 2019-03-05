'use strict'
const deprecate = require('deprecate');
if (!process.env.NTBA_FIX_319) {
  // Enable Promise cancellation.
  try {
    const msg =
      'Automatic enabling of cancellation of promises is deprecated.\n' +
      'In the future, you will have to enable it yourself.\n' +
      'See https://github.com/yagop/node-telegram-bot-api/issues/319.';
    deprecate(msg);
    Promise.config({
      cancellation: true,
    });
  } catch (ex) {
    /* eslint-disable no-console */
    const msg =
      'error: Enabling Promise cancellation failed.\n' +
      '       Temporary fix is to load/require this library as early as possible before using any Promises.';
    console.error(msg);
    throw ex;
    /* eslint-enable no-console */
  }
}