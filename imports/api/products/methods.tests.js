// Tests for products methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Products } from './products.js';
import './methods.js';

if (Meteor.isServer) {
  describe('products methods', function () {
    beforeEach(function () {
      Products.remove({});
    });

    it('can add a new link', function () {
      const addProduct = Meteor.server.method_handlers['products.insert'];

      addProduct.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Products.find().count(), 1);
    });
  });
}
