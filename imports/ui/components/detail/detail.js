import './detail.html';


Template.detail.onCreated(function () {
	Session.set('readIsVisible', true);
	console.log(Session.get('readIsVisible') + " on load");
});

Template.detail.helpers({
  readIsVisible() {
    if(Session.get('readIsVisible')) {
    	return 'slds-show';
    }
    else {
    	return 'slds-hide';
    }
  },
});

// Template.globalNav.onCreated(function globalNavOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.detail.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.globalNav.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
