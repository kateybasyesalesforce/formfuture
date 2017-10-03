// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contacts/contacts.js';
import { Opptys } from '../../api/opptys/opptys.js';
import { Products } from '../../api/products/products.js';

Meteor.startup(() => {
  // if the Links collection is empty


  if(Opptys.find().count() === 0){
    var opptys = JSON.parse(Assets.getText('opptys.json'));

    _.each(opptys, function(oppty) {
      Opptys.insert(oppty)
    });

    // opptys.forEach(oppty => );
  }

  if(Contacts.find().count() === 0){
    var contacts = JSON.parse(Assets.getText('contacts.json'));

    _.each(contacts, function(contact) {
      Contacts.insert(contact)
    });

    // opptys.forEach(oppty => );
  }

  if(Products.find().count() === 0){
    var products = JSON.parse(Assets.getText('products.json'));

    _.each(products, function(product) {
      Products.insert(product)
    });

    // opptys.forEach(oppty => );
  }




  // if (Leads.find().count() === 0) {
  //   const data = [
  //     {
  //       title: 'Do the Tutorial',
  //       url: 'https://www.meteor.com/try',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Follow the Guide',
  //       url: 'http://guide.meteor.com',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Read the Docs',
  //       url: 'https://docs.meteor.com',
  //       createdAt: new Date(),
  //     },
  //     {
  //       title: 'Discussions',
  //       url: 'https://forums.meteor.com',
  //       createdAt: new Date(),
  //     },
  //   ];

  //   data.forEach(link => Links.insert(link));
  // }
});
