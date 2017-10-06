import './detailEdit.html';


function groupByTwo(arr, groupSize){
  var grouped = _.map(arr, function(item, index){
    return index % groupSize === 0 ? arr.slice(index, index + groupSize) : null; 
    })
    .filter(function(item){ return item; 
  });
  return grouped;
}

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
  isEmpty(label){
    var data = Session.get('oppty');
    for (var i = data.length - 1; i >= 0; i--) {
      for (var j = data[i].length - 1; j >= 0; j--) {
        if(data[i][j].label == label){
          if(data[i][j].content){
            return 'full';
          }
          else {
            return 'empty';
          }
        }
      }
    }
  },
  id(){
    return "edit-" + Session.get('whichField');
  },
  isEditable: function(label){
    console.log(label)
    if (label == "Owner" || label == "Created" || label == "Last Modified") {
      return false;
    }
    else {
      return true;
    }
  },
  oppty(){
    return Session.get('oppty');
  }
});

// Template.detailEdit.events({
//   'click .ff-cancel'(event, instance) {
//     Session.set("editIsVisible", false);
//     Session.set("readIsVisible", true);
//   },
//   'click .ff-save'(event, instance){
//     var data = Session.get('oppty');

//     var keys = [];
//     var newValues = [];

//     var els = $('.detailEditContainer').find('.slds-input')
//     for (var i = els.length - 1; i >= 0; i--) {
//       var el = els[i];
//       var id = el.id.split('-')[1];

//       keys.push(id);
//       newValues.push(el.value);
      
//     }

//     var bigArray = [];
//     for (var i = keys.length - 1; i >= 0; i--) {
//       var obj = {};
//       if(keys[i] != 'Id' && keys[i] != 'designType'){
//         obj.label = keys[i];
//         obj.content = newValues[i];
//         bigArray.push(obj);
//       }
//     }
//     Session.set('oppty', groupByTwo(bigArray, 2));
//     Session.set("editIsVisible", false);
//     Session.set("readIsVisible", true);
    
//     return Session.get('oppty');

//   }
// });



