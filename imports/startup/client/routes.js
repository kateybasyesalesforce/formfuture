import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session'

// Import needed templates
import '../../ui/layouts/test/test.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/testPage/testPage.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('home', { main: 'home' });
  },
});

FlowRouter.route('/:whichPage/:testId', {
  name: 'App.testPage',
  action() {
    BlazeLayout.render('App_test', { main: 'testPage' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
