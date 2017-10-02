import './detailEdit.html';


Template.detailEdit.onCreated(function () {
	Session.set('editIsVisible', false);
	console.log(Session.get('editIsVisible') + " on load");
});

Template.detailEdit.helpers({
  editIsVisible() {
    if(Session.get('editIsVisible')) {
    	return 'slds-show';
    }
    else {
    	return 'slds-hide';
    }
  },
});

Template.detailEdit.events({
  'click .ff-cancel'(event, instance) {
    Session.set("editIsVisible", false);
    Session.set("readIsVisible", true);
  },
});