import './testPage.html';

import '../../components/detail/detail.js';
import '../../components/lookup/lookup.js';
import '../../components/pageHeader/pageHeader.js';
import '../../components/path/path.js';
import '../../components/pickList/pickList.js';
import '../../components/tabs/tabs.js';

const opptys = [{"Name":"Hillside Recycleables Parts LLC / Small Mfg Prop $14K","AccountName":"Hillside Recycleables Parts LLC","CloseDate":"6/1/2017","Campaign Source":"Fall Newsletter","Amount":"$13,875.00","Owner":"Paula Begum","Next Step":"","Probability (%)":"50%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"Sutter Investors","Lead Source":"Phone","Order Number":null,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"","Description":"","Created":"9/13/2017","Modified":"2/1/17","designType":"noLines","Id":"noLinesFind1"},{"Name":"DuuBu & Co., LG OFC PROP 15","AccountName":"DuuBu & Co.","CloseDate":"6/2/2017","Campaign Source":"New York Tradeshow","Amount":"$22,586.00","Owner":"Brian Batiste","Next Step":"","Probability (%)":"25%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":8263,"Campaign ID":"","Currency":"","Expected Revenue":"$21,586.00","Description":"","Created":"9/14/2017","Modified":"","designType":"noLines","Id":"noLinesFind2"},{"Name":"617 Information Computers, SM OFF 7","AccountName":"617 Information Computers","CloseDate":"6/3/2017","Campaign Source":"Facebook","Amount":"$1,671.00","Owner":"Charlette Seamon","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"Harvard & Associates","Lead Source":"Social","Order Number":null,"Campaign ID":"","Currency":"Euro","Expected Revenue":"$671.00","Description":"","Created":"9/15/2017","Modified":"","designType":"noLines","Id":"noLinesAdd1"},{"Name":"Clementina Systems / Small Garage Property Coverage $34K","AccountName":"Clementina Systems","CloseDate":"6/4/2017","Campaign Source":"","Amount":"$34,219.00","Owner":"Evette Leonhardt","Next Step":"","Probability (%)":"75%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Phone","Order Number":null,"Campaign ID":"","Currency":"","Expected Revenue":"","Description":"","Created":"9/16/2017","Modified":"2/4/17","designType":"noLines","Id":"noLinesAdd2"},{"Name":"N Consultants Inc, Small Office Prop 7","AccountName":"N Consultants Inc","CloseDate":"6/5/2017","Campaign Source":"Promo Email","Amount":"$1,721.00","Owner":"Paulene Lyden","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":2659,"Campaign ID":"","Currency":"","Expected Revenue":"$721.00","Description":"","Created":"9/17/2017","Modified":"","designType":"noLines","Id":"noLinesChange1"},{"Name":"PiSo / CORP OFC PROP $72K","AccountName":"PiSo","CloseDate":"6/6/2017","Campaign Source":"Twitter","Amount":"$72,494.00","Owner":"Jovita Stahly","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Social","Order Number":null,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"","Description":"","Created":"9/18/2017","Modified":"2/6/17","designType":"noLines","Id":"noLinesChange2"},{"Name":"Harvard And Associates, Corp Office Property Coverage 22","AccountName":"Harvard And Associates","CloseDate":"6/7/2017","Campaign Source":"","Amount":"$113,286.00","Owner":"Torie Holdaway","Next Step":"","Probability (%)":"50%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Phone","Order Number":null,"Campaign ID":"","Currency":"","Expected Revenue":"$112,286.00","Description":"","Created":"9/19/2017","Modified":"","designType":"allLines","Id":"allLinesFind1"},{"Name":"Sajeehoo & Company, Small Office Prop 20","AccountName":"Sajeehoo & Company","CloseDate":"6/8/2017","Campaign Source":"Spring Newsletter","Amount":"$4,823.00","Owner":"Hilma Cavanagh","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":null,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"","Description":"","Created":"9/20/2017","Modified":"2/8/17","designType":"allLines","Id":"allLinesFind2"},{"Name":"Pearl Advisers - Corp Office Property Coverage, $72603","AccountName":"Pearl Advisers","CloseDate":"6/9/2017","Campaign Source":"Facebook","Amount":"$72,603.00","Owner":"Verla Rand","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Social","Order Number":null,"Campaign ID":"","Currency":"","Expected Revenue":"$71,603.00","Description":"","Created":"9/21/2017","Modified":"","designType":"allLines","Id":"allLinesAdd1"},{"Name":"WuWoo & Co., CORP OFC PROP 19","AccountName":"WuWoo & Co.","CloseDate":"6/10/2017","Campaign Source":"Chicago Tradeshow","Amount":"$96,406.00","Owner":"Kalyn Knicely","Next Step":"","Probability (%)":"25%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Phone","Order Number":null,"Campaign ID":"","Currency":"Euro","Expected Revenue":"","Description":"","Created":"9/22/2017","Modified":"2/10/17","designType":"allLines","Id":"allLinesAdd2"},{"Name":"Sutter Investors - Small Office Property Coverage, $1666","AccountName":"Sutter Investors","CloseDate":"6/11/2017","Campaign Source":"Promo Email","Amount":"$1,666.00","Owner":"Delinda Million","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":null,"Campaign ID":"","Currency":"","Expected Revenue":"$666.00","Description":"","Created":"9/23/2017","Modified":"","designType":"allLines","Id":"allLinesChange1"},{"Name":"Beach Manufacturing Supplies / SM MFG $30K","AccountName":"Beach Manufacturing Supplies","CloseDate":"6/12/2017","Campaign Source":"Twitter","Amount":"$30,234.00","Owner":"Boyce Cortright","Next Step":"","Probability (%)":"75%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Social","Order Number":null,"Campaign ID":"","Currency":"Euro","Expected Revenue":"$29,234.00","Description":"","Created":"9/24/2017","Modified":"","designType":"allLines","Id":"allLinesChange2"},{"Name":"South Offices, MED HC 25","AccountName":"South Offices","CloseDate":"6/13/2017","Campaign Source":"","Amount":"$175,335.00","Owner":"Gabrielle Ruehl","Next Step":"","Probability (%)":"50%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Phone","Order Number":2413,"Campaign ID":"","Currency":"","Expected Revenue":"","Description":"","Created":"9/25/2017","Modified":"2/13/17","designType":"emptyLines","Id":"emptyLinesFind1"},{"Name":"Campus Podiatry, SM HC PROP 7","AccountName":"Campus Podiatry","CloseDate":"6/14/2017","Campaign Source":"Summer Newsletter","Amount":"$13,488.00","Owner":"Sadie Gragg","Next Step":"","Probability (%)":"50%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":null,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"$12,488.00","Description":"","Created":"9/26/2017","Modified":"","designType":"emptyLines","Id":"emptyLinesFind2"},{"Name":"Newhall Metal Contractors - Small Mfg, $31608","AccountName":"Newhall Metal Contractors","CloseDate":"6/15/2017","Campaign Source":"Facebook","Amount":"$31,608.00","Owner":"Anya Dashiell","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"SoMa Systems","Lead Source":"Social","Order Number":6284,"Campaign ID":"","Currency":"","Expected Revenue":"","Description":"","Created":"9/27/2017","Modified":"2/15/17","designType":"emptyLines","Id":"emptyLinesAdd1"},{"Name":"Financial Distrct, Large Office Prop 18","AccountName":"Financial Distrct","CloseDate":"6/16/2017","Campaign Source":"","Amount":"$27,978.00","Owner":"Gabriele Groseclose","Next Step":"","Probability (%)":"25%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Phone","Order Number":null,"Campaign ID":"","Currency":"","Expected Revenue":"$26,978.00","Description":"","Created":"9/28/2017","Modified":"","designType":"emptyLines","Id":"emptyLinesAdd2"},{"Name":"Coopaa, CORP OFF 21","AccountName":"Coopaa","CloseDate":"6/17/2017","Campaign Source":"Webinar","Amount":"$105,020.00","Owner":"Tisa Rangel","Next Step":"","Probability (%)":"50%","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"","Lead Source":"Web","Order Number":null,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"$104,020.00","Description":"","Created":"9/29/2017","Modified":"","designType":"emptyLines","Id":"emptyLinesChange1"},{"Name":"SoMa Systems / Small Garage Property Coverage $42K","AccountName":"SoMa Systems","CloseDate":"6/18/2017","Campaign Source":"Twitter","Amount":"$42,467.00","Owner":"Leigha Sandhu","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Main Competitor(s)":"Sutter Investors","Lead Source":"Social","Order Number":1482,"Campaign ID":"","Currency":"U.S. Dollar","Expected Revenue":"","Description":"","Created":"9/30/2017","Modified":"2/18/17","designType":"emptyLines","Id":"emptyLinesChange2"}];
const contacts = [{"First Name":"Haruka","Last Name":"Aoyama","Email":"haruka@hillsiderecycleablesparts.com","Title":"VP Finance"},{"First Name":"Fernanda","Last Name":"Chapa","Email":"fernanda@hillsiderecycleablesparts.com","Title":"CEO"},{"First Name":"Natalia","Last Name":"Szostak","Email":"nszostak@duubu.com","Title":"Sales Associate"},{"First Name":"Aditya","Last Name":"Kukkar","Email":"akukkar@617-info-comps.com","Title":"CEO"},{"First Name":"Lindsey","Last Name":"Arledge","Email":"lindsey@clementinasystems.us","Title":"Chief Technology Officer"}];
const products = [{"Description":"Small Office Property Coverage","Family":"","Name":"Small Office Property Coverage","ProductCode":"AIC-BPOFF25-A"},{"Description":"Large Office Property Coverage","Family":"","Name":"Large Office Property Coverage","ProductCode":"AIC-BPOFF100-A"},{"Description":"Corporate Office Property Coverage","Family":"","Name":"Corporate Office Property Coverage","ProductCode":"AIC-BPOFF500-A"},{"Description":"Small Garage Property Coverage","Family":"","Name":"Small Garage Property Coverage","ProductCode":"AIC-BPGAR10-A"},{"Description":"Active Garage Property Coverage","Family":"","Name":"Active Garage Property Coverage","ProductCode":"AIC-BPGAR30-A"}];

function groupByTwo(arr, groupSize){
  var grouped = _.map(arr, function(item, index){
    return index % groupSize === 0 ? arr.slice(index, index + groupSize) : null; 
    })
    .filter(function(item){ return item; 
  });
  return grouped;
}

Template.testPage.created = function(){
    var testOppty = "";
    opptys.forEach(function(oppty){
      if(oppty.Id == FlowRouter.getParam('testId')){
        testOppty = oppty;
      }
    });
    var keys = Object.keys(testOppty);
    var values = [];
    for(key in testOppty){
      values.push(testOppty[key]);
    }
    var bigArray = [];
    for (var i = keys.length - 1; i >= 0; i--) {
      var obj = {};
      if(keys[i] != 'Id' && keys[i] != 'designType'){
        obj.label = keys[i];
        obj.content = values[i];
        bigArray.push(obj);
      }
    }
    Session.set('oppty', groupByTwo(bigArray, 2));
}

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
    // console.log(data.values[0]);
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
    // console.log(data.values[0]);
  },
  whichPage: function(){
  	return FlowRouter.current().params.whichPage;
  },
  oppty: function(){
    return Session.get('oppty');
  }
});



Template.testPage.events({
  'click .ff-cancel'(event, instance) {
    Session.set("editIsVisible", false);
    Session.set("readIsVisible", true);
  },
  // 'mouseover .ff-editInline'(event, instance){
  //   console.log(event.target)
  //   var el = $("#edit-"+event.target.id.split('-')[1]);
  //       el.focus();
  // },
  'click .ff-editInline'(event, instance) {
    Session.set('editIsVisible', true);
    Session.set('readIsVisible', false);
  },
  'click .ff-save'(event, instance){
    var data = Session.get('oppty');

    var keys = [];
    var newValues = [];

    var els = $('.detailEditContainer').find('.slds-input')
    for (var i = els.length - 1; i >= 0; i--) {
      var el = els[i];
      var id = el.id.split('-')[1];

      keys.push(id);
      newValues.push(el.value);
      
    }

    var bigArray = [];
    for (var i = keys.length - 1; i >= 0; i--) {
      var obj = {};
      if(keys[i] != 'Id' && keys[i] != 'designType'){
        obj.label = keys[i];
        obj.content = newValues[i];
        bigArray.push(obj);
      }
    }
    Session.set('oppty', groupByTwo(bigArray, 2));
    Session.set("editIsVisible", false);
    Session.set("readIsVisible", true);
    
    Session.set('oppty', groupByTwo(bigArray, 2));
    return Session.get('oppty');

  }
});











