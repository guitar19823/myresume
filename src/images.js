export const images = {};

[
  'avatar',
  'address',
  'email',
  'phone',
  'telegram',
  'skype',
  'facebook',
  'vk',
  'github',
  'experience',
  'education',
  'skills'
].map(image => images[image] = require(`./assets/img/${image}.png`));