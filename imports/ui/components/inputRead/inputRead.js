import './inputRead.html';


Template.inputRead.events({
  'click .ff-editInline'(event, instance) {
    Session.set('editIsVisible', true);
    Session.set('readIsVisible', false);
    console.log(Session.get('editIsVisible') + " on pencil click");
  },
});