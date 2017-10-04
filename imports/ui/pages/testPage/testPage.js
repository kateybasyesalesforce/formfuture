import './testPage.html';

import '../../components/detail/detail.js';
import '../../components/lookup/lookup.js';
import '../../components/pageHeader/pageHeader.js';
import '../../components/path/path.js';
import '../../components/pickList/pickList.js';
import '../../components/tabs/tabs.js';

const opptys = [{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesFind1","AccountName":"Hillside Recycleables Parts LLC","Amount":13875,"CloseDate":"1999-07-16","Name":"Hillside Recycleables Parts LLC / Small Mfg Prop $14K","OwnerEmail":"joy@alta-insurance.com","StageName":"Prospecting","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesFind2","AccountName":"DuuBu & Co.","Amount":22586,"CloseDate":"1999-08-06","Name":"DuuBu & Co., LG OFC PROP 15","OwnerEmail":"tomas@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesAdd1","AccountName":"617 Information Computers","Amount":1671,"CloseDate":"1999-08-06","Name":"617 Information Computers, SM OFF 7","OwnerEmail":"duston@alta-insurance.com","StageName":"Closed Won","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesAdd2","AccountName":"Clementina Systems","Amount":34219,"CloseDate":"1999-08-06","Name":"Clementina Systems / Small Garage Property Coverage $34K","OwnerEmail":"yarin@alta-insurance.com","StageName":"Needs Analysis","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesChange1","AccountName":"N Consultants Inc","Amount":1721,"CloseDate":"1999-08-06","Name":"N Consultants Inc, Small Office Prop 7","OwnerEmail":"xiaodan@alta-insurance.com","StageName":"Negotiation/Review","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"noLines","Id":"noLinesChange2","AccountName":"PiSo","Amount":72494,"CloseDate":"1999-08-13","Name":"PiSo / CORP OFC PROP $72K","OwnerEmail":"duston@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesFind1","AccountName":"Harvard And Associates","Amount":113286,"CloseDate":"1999-08-20","Name":"Harvard And Associates, Corp Office Property Coverage 22","OwnerEmail":"adrian@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesFind2","AccountName":"Sajeehoo & Company","Amount":4823,"CloseDate":"1999-08-20","Name":"Sajeehoo & Company, Small Office Prop 20","OwnerEmail":"faiz@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesAdd1","AccountName":"Pearl Advisers","Amount":72603,"CloseDate":"1999-08-20","Name":"Pearl Advisers - Corp Office Property Coverage, $72603","OwnerEmail":"joy@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesAdd2","AccountName":"WuWoo & Co.","Amount":96406,"CloseDate":"1999-08-27","Name":"WuWoo & Co., CORP OFC PROP 19","OwnerEmail":"giridhar@alta-insurance.com","StageName":"Proposal/Price Quote","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesChange1","AccountName":"Sutter Investors","Amount":1666,"CloseDate":"1999-09-04","Name":"Sutter Investors - Small Office Property Coverage, $1666","OwnerEmail":"stuart@alta-insurance.com","StageName":"Closed Won","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"allLines","Id":"allLinesChange2","AccountName":"Beach Manufacturing Supplies","Amount":30234,"CloseDate":"1999-09-11","Name":"Beach Manufacturing Supplies / SM MFG $30K","OwnerEmail":"rod@alta-insurance.com","StageName":"Closed Won","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesFind1","AccountName":"South Offices","Amount":175335,"CloseDate":"1999-09-25","Name":"South Offices, MED HC 25","OwnerEmail":"elisha@alta-insurance.com","StageName":"Needs Analysis","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesFind2","AccountName":"Campus Podiatry","Amount":13488,"CloseDate":"1999-10-01","Name":"Campus Podiatry, SM HC PROP 7","OwnerEmail":"giridhar@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesAdd1","AccountName":"Newhall Metal Contractors","Amount":31608,"CloseDate":"1999-10-08","Name":"Newhall Metal Contractors - Small Mfg, $31608","OwnerEmail":"duston@alta-insurance.com","StageName":"Closed Won","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesAdd2","AccountName":"Financial Distrct","Amount":27978,"CloseDate":"1999-10-15","Name":"Financial Distrct, Large Office Prop 18","OwnerEmail":"faiz@alta-insurance.com","StageName":"Qualification","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesChange1","AccountName":"Coopaa","Amount":105020,"CloseDate":"1999-10-22","Name":"Coopaa, CORP OFF 21","OwnerEmail":"winthrop@alta-insurance.com","StageName":"Needs Analysis","Type":"New Business"},{"GeneratedOn":"2017-04-12T12:54:25-07:00","GeneratedBy":"UXMetricsGenerator/1.0","designType":"emptyLines","Id":"emptyLinesChange2","AccountName":"SoMa Systems","Amount":42467,"CloseDate":"1999-10-22","Name":"SoMa Systems / Small Garage Property Coverage $42K","OwnerEmail":"xiaodan@alta-insurance.com","StageName":"Closed Lost","Type":"New Business"}];
const contacts = [{"First Name":"Haruka","Last Name":"Aoyama","Email":"haruka@hillsiderecycleablesparts.com","Title":"VP Finance"},{"First Name":"Fernanda","Last Name":"Chapa","Email":"fernanda@hillsiderecycleablesparts.com","Title":"CEO"},{"First Name":"Natalia","Last Name":"Szostak","Email":"nszostak@duubu.com","Title":"Sales Associate"},{"First Name":"Aditya","Last Name":"Kukkar","Email":"akukkar@617-info-comps.com","Title":"CEO"},{"First Name":"Lindsey","Last Name":"Arledge","Email":"lindsey@clementinasystems.us","Title":"Chief Technology Officer"}];
const products = [{"Description":"Small Office Property Coverage","Family":"","Name":"Small Office Property Coverage","ProductCode":"AIC-BPOFF25-A"},{"Description":"Large Office Property Coverage","Family":"","Name":"Large Office Property Coverage","ProductCode":"AIC-BPOFF100-A"},{"Description":"Corporate Office Property Coverage","Family":"","Name":"Corporate Office Property Coverage","ProductCode":"AIC-BPOFF500-A"},{"Description":"Small Garage Property Coverage","Family":"","Name":"Small Garage Property Coverage","ProductCode":"AIC-BPGAR10-A"},{"Description":"Active Garage Property Coverage","Family":"","Name":"Active Garage Property Coverage","ProductCode":"AIC-BPGAR30-A"}];

Template.testPage.helpers({
  contacts: function(){
    var data={};
        data.headers = Object.keys(contacts[0]);
        data.values = [];
    contacts.forEach(function (contact) {
      var contactValues = [];
      for(var key in contact){
        contactValues.push(contact[key]);
      }
      data.values.push(contactValues);
    });
    return data;
    console.log(data.values[0]);
  },
	oppty: function(){
    var isEmpty = function(content){
      if (content) {return "full"}
        else{ return "empty" }
    }
    var testOppty = "";
    opptys.forEach(function(oppty) {

      if(oppty.Id == FlowRouter.getParam("testId")){
        testOppty = oppty;
      }
    });
    testOppty.isEmpty = isEmpty;
    return testOppty;
	},
  products: function(){
    var data={};
        data.headers = Object.keys(products[0]);
        data.values = [];
    products.forEach(function (product) {
      var productValues = [];
      for(var key in product){
        productValues.push(product[key]);
      }
      data.values.push(productValues);
    });
    return data;
    console.log(data.values[0]);
  },
  whichPage: function(){
  	return FlowRouter.current().params.whichPage;
  }
});