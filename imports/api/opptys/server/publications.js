// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Opptys } from '../opptys.js';

Meteor.publish('testOppty', function (testId) {
  return Opptys.find({Id: testId});
});