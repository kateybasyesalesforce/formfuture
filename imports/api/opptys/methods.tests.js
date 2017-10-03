// Tests for opptys methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Opptys } from './opptys.js';
import './methods.js';

if (Meteor.isServer) {
  describe('opptys methods', function () {
    beforeEach(function () {
      Opptys.remove({});
    });

    it('can add a new oppty', function () {
      const addOppty = Meteor.server.method_handlers['opptys.insert'];

      addOppty.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Opptys.find().count(), 1);
    });
  });
}
