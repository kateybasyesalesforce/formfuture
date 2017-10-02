import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session'

// Import needed templates
import '../../ui/layouts/test/test.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/1_1_find/1_1_find.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_home', { main: 'App_home' });
  },
});

FlowRouter.route('/test/1_1_find', {
  name: 'App.1_1_find',
  action() {
    BlazeLayout.render('App_test', { main: '1_1_find' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
