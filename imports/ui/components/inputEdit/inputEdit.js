import './inputEdit.html';


Template.inputEdit.onRendered = function(){
  // var idSnippet = event.target.id.split('-')[1];
  // Tracker.afterFlush(function() {
  //   this.find('#edit-'+idSnippet).addClass('ff-focus');
  // }.bind(instance));
}

Template.inputEdit.helpers({
  id: function(label){
    return label.split(' ').join('_');
  },
  inputIsPicklist(inputType) {
    if (inputType == "picklist") {return true}
    	else{return false}
  },
  inputIsInput(inputType) {
    if (inputType == "input") {return true}
    	else{return false}
  },
  inputIsLookup(inputType) {
    if (inputType == "lookup") {return true}
    	else{return false}
  },
  inputIsTextarea(inputType) {
    if (inputType == "textarea") {return true}
    	else{return false}
  },
  isFocused(){
    var whichField = Session.get('whichField');
  },
  isRequired(label){
    if (label == 'Owner' || label == 'Account Name' || label == 'Close Date' || label == 'Stage') {
      return true;
    }
    else {
      return false;
    }
  }
  // whichField(){
  //   var whichField = Session.get('whichField');
  //   console.log(whichField)
  // }
});