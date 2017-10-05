import './inputRead.html';

Template.inputRead.helpers({
  isEditable: function(label){
    if (label == "Owner" || label == "Created" || label == "Modified") {
      return false;
    }
    else {
      return true;
    }
  },
  isEmpty: function(){

  },
  isLink: function(label){
    if(label == "Owner" || label == "Account Name") {
      return true;
    }
    else {return false}
  },
})

Template.inputRead.events({
  // 'click .ff-editInline'(event, instance) {
  //   Session.set('editIsVisible', true);
  //   Session.set('readIsVisible', false);

  //   Session.set('whichField', event.target.id.split('-')[1]);
  // },
});