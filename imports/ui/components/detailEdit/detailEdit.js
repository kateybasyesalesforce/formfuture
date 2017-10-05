import './detailEdit.html';


Template.detailEdit.onCreated(function () {
	Session.set('editIsVisible', false);
});

Template.detailEdit.helpers({
  editIsVisible() {
    if(Session.get('editIsVisible')) {
    	return 'ff-show';
    }
    else {
    	return 'ff-hide';
    }
  },
  id(){
    return "edit-" + Session.get('whichField');
  },
});

Template.detailEdit.events({
  // 'click .ff-cancel'(event, instance) {
  //   Session.set("editIsVisible", false);
  //   Session.set("readIsVisible", true);
  // },
});