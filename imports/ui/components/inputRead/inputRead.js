import './inputRead.html';

Template.inputRead.helpers({
  id: function(label){
    return label.split(' ').join('_');
  },
  isEditable: function(label){
    if (label == "Owner" || label == "Created" || label == "Last Modified") {
      return false;
    }
    else {
      return true;
    }
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