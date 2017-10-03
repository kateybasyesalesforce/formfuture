// Methods related to opptys

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Opptys } from './opptys.js';

Meteor.methods({
  'opptys.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Opptys.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
