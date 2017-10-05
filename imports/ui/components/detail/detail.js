import './detail.html';


Template.detail.onCreated(function () {
	Session.set('readIsVisible', true);
});

Template.detail.helpers({
  readIsVisible() {
    if(Session.get('readIsVisible')) {
    	return 'ff-show';
    }
    else {
    	return 'ff-hide';
    }
  },
});