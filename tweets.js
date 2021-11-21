const S = require('tiny-dedent');
const moment = require('moment');

module.exports = {
  daily: S(`
    How's your habit going?

    1. What habit are you working on?
    2. How did it go today?
    3. What can you improve for tomorrow?

    Reply below 👇
  `),
};