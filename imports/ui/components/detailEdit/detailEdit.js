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
  id(){
    return "edit-" + Session.get('whichField');
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



