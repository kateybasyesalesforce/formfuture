import './home.html';

const designType = ["noLines","noLines","noLines","noLines","noLines","noLines","allLines","allLines","allLines","allLines","allLines","allLines","emptyLines","emptyLines","emptyLines","emptyLines","emptyLines","emptyLines"];
const test = ["noLinesFind1","noLinesFind2","noLinesAdd1","noLinesAdd2","noLinesChange1","noLinesChange2","allLinesFind1","allLinesFind2","allLinesAdd1","allLinesAdd2","allLinesChange1","allLinesChange2","emptyLinesFind1","emptyLinesFind2","emptyLinesAdd1","emptyLinesAdd2","emptyLinesChange1","emptyLinesChange2"];

Template.home.helpers({
	links: function(){
    var links = [];
    designType.forEach(function(type, i) {
    	var link = {};
	    link.type = type;
	    link.test = test[i];
	    links.push(link);
		});
		return links;
  }
});