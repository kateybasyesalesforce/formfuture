import './detail.html';

// function flat(data){
// 	for (var i = data.length - 1; i >= 0; i--) {
// 		data[i]
// 	}
// }

Template.detail.onCreated(function () {
	Session.set('readIsVisible', true);
});

Template.detail.helpers({
	isEmpty(label){
		console.log(label)
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
  readIsVisible() {
    if(Session.get('readIsVisible')) {
    	return 'ff-show';
    }
    else {
    	return 'ff-hide';
    }
  },
});