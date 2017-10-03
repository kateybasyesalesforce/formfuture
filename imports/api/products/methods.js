// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Products } from './products.js';

Meteor.methods({
  'products.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Products.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
