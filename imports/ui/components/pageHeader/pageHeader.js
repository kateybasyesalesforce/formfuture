import './pageHeader.html';

Template.pageHeader.helpers({
  oppty: function(label){
		var data = Session.get('oppty');
		var pageHeader = [];
		
		data.forEach(function(row) {
		  row.forEach(function(item){
		  	if(item.label == 'Account Name' || item.label == 'Close Date' || item.label == 'Amount' || item.label == 'Owner'){
		  		pageHeader.push(item);
		  	}
		  });
		});
		return pageHeader;
  },
  opptyName: function(label){
		var data = Session.get('oppty');
		var opptyName = [];
		
		data.forEach(function(row) {
		  row.forEach(function(item){
		  	if(item.label == 'Name'){
		  		opptyName.push(item);
		  	}
		  });
		});
		return opptyName[0];
  },
  isLink: function(label){
  	if(label == 'Account Name' || label == 'Owner') {
  		return true
  	}
  	else { return false }
  }
})


// Template.globalNav.onCreated(function globalNavOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.globalNav.helpers({
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
