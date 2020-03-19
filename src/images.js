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
  'skills',
  'settings',
  'portfolio',
  'example_1',
  'example_2',
  'example_3',
  'example_4',
  'example_5',
  'example_6'
].map(image => images[image] = require(`./assets/img/${image}.png`));