import './testPage.html';

import '../../components/detail/detail.js';
import '../../components/lookup/lookup.js';
import '../../components/pageHeader/pageHeader.js';
import '../../components/path/path.js';
import '../../components/pickList/pickList.js';
import '../../components/tabs/tabs.js';

const opptys = [{"Name":"Hillside Recycleables Parts LLC / Small Mfg Prop $14K","Account Name":"Hillside Recycleables Parts LLC","Close Date":"6/1/2017","Amount":"$13,875.00","Owner":"Paula Begum","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$12,875.00","Description":"","Created":"9/13/2017","Last Modified":"2/1/17","designType":"noLines","Id":"noLinesFind1"},{"Name":"DuuBu & Co., LG OFC PROP 15","Account Name":"DuuBu & Co.","Close Date":"6/2/2017","Amount":"$22,586.00","Owner":"Brian Batiste","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$21,586.00","Description":"","Created":"9/14/2017","Last Modified":"2/2/17","designType":"noLines","Id":"noLinesFind2"},{"Name":"617 Information Computers, SM OFF 7","Account Name":"617 Information Computers","Close Date":"6/3/2017","Amount":"$1,671.00","Owner":"Charlette Seamon","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$671.00","Description":"","Created":"9/15/2017","Last Modified":"2/3/17","designType":"noLines","Id":"noLinesAdd1"},{"Name":"Clementina Systems / Small Garage Property Coverage $34K","Account Name":"Clementina Systems","Close Date":"6/4/2017","Amount":"$34,219.00","Owner":"Evette Leonhardt","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$33,219.00","Description":"","Created":"9/16/2017","Last Modified":"2/4/17","designType":"noLines","Id":"noLinesAdd2"},{"Name":"N Consultants Inc, Small Office Prop 7","Account Name":"N Consultants Inc","Close Date":"6/5/2017","Amount":"$1,721.00","Owner":"Paulene Lyden","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$721.00","Description":"","Created":"9/17/2017","Last Modified":"2/5/17","designType":"noLines","Id":"noLinesChange1"},{"Name":"PiSo / CORP OFC PROP $72K","Account Name":"PiSo","Close Date":"6/6/2017","Amount":"$72,494.00","Owner":"Jovita Stahly","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$71,494.00","Description":"","Created":"9/18/2017","Last Modified":"2/6/17","designType":"noLines","Id":"noLinesChange2"},{"Name":"Harvard And Associates, Corp Office Property Coverage 22","Account Name":"Harvard And Associates","Close Date":"6/7/2017","Amount":"$113,286.00","Owner":"Torie Holdaway","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$112,286.00","Description":"","Created":"9/19/2017","Last Modified":"2/7/17","designType":"allLines","Id":"allLinesFind1"},{"Name":"Sajeehoo & Company, Small Office Prop 20","Account Name":"Sajeehoo & Company","Close Date":"6/8/2017","Amount":"$4,823.00","Owner":"Hilma Cavanagh","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$3,823.00","Description":"","Created":"9/20/2017","Last Modified":"2/8/17","designType":"allLines","Id":"allLinesFind2"},{"Name":"Pearl Advisers - Corp Office Property Coverage, $72603","Account Name":"Pearl Advisers","Close Date":"6/9/2017","Amount":"$72,603.00","Owner":"Verla Rand","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$71,603.00","Description":"","Created":"9/21/2017","Last Modified":"2/9/17","designType":"allLines","Id":"allLinesAdd1"},{"Name":"WuWoo & Co., CORP OFC PROP 19","Account Name":"WuWoo & Co.","Close Date":"6/10/2017","Amount":"$96,406.00","Owner":"Kalyn Knicely","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$95,406.00","Description":"","Created":"9/22/2017","Last Modified":"2/10/17","designType":"allLines","Id":"allLinesAdd2"},{"Name":"Sutter Investors - Small Office Property Coverage, $1666","Account Name":"Sutter Investors","Close Date":"6/11/2017","Amount":"$1,666.00","Owner":"Delinda Million","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$666.00","Description":"","Created":"9/23/2017","Last Modified":"2/11/17","designType":"allLines","Id":"allLinesChange1"},{"Name":"Beach Manufacturing Supplies / SM MFG $30K","Account Name":"Beach Manufacturing Supplies","Close Date":"6/12/2017","Amount":"$30,234.00","Owner":"Boyce Cortright","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$29,234.00","Description":"","Created":"9/24/2017","Last Modified":"2/12/17","designType":"allLines","Id":"allLinesChange2"},{"Name":"South Offices, MED HC 25","Account Name":"South Offices","Close Date":"6/13/2017","Amount":"$175,335.00","Owner":"Gabrielle Ruehl","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$174,335.00","Description":"","Created":"9/25/2017","Last Modified":"2/13/17","designType":"emptyLines","Id":"emptyLinesFind1"},{"Name":"Campus Podiatry, SM HC PROP 7","Account Name":"Campus Podiatry","Close Date":"6/14/2017","Amount":"$13,488.00","Owner":"Sadie Gragg","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$12,488.00","Description":"","Created":"9/26/2017","Last Modified":"2/14/17","designType":"emptyLines","Id":"emptyLinesFind2"},{"Name":"Newhall Metal Contractors - Small Mfg, $31608","Account Name":"Newhall Metal Contractors","Close Date":"6/15/2017","Amount":"$31,608.00","Owner":"Anya Dashiell","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$30,608.00","Description":"","Created":"9/27/2017","Last Modified":"2/15/17","designType":"emptyLines","Id":"emptyLinesAdd1"},{"Name":"Financial Distrct, Large Office Prop 18","Account Name":"Financial Distrct","Close Date":"6/16/2017","Amount":"$27,978.00","Owner":"Gabriele Groseclose","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Phone","Expected Revenue":"$26,978.00","Description":"","Created":"9/28/2017","Last Modified":"2/16/17","designType":"emptyLines","Id":"emptyLinesAdd2"},{"Name":"Coopaa, CORP OFF 21","Account Name":"Coopaa","Close Date":"6/17/2017","Amount":"$105,020.00","Owner":"Tisa Rangel","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Web","Expected Revenue":"$104,020.00","Description":"","Created":"9/29/2017","Last Modified":"2/17/17","designType":"emptyLines","Id":"emptyLinesChange1"},{"Name":"SoMa Systems / Small Garage Property Coverage $42K","Account Name":"SoMa Systems","Close Date":"6/18/2017","Amount":"$42,467.00","Owner":"Leigha Sandhu","Stage Name":"Unqualified","Type":"New Business","Lead Source":"Social","Expected Revenue":"$41,467.00","Description":"","Created":"9/30/2017","Last Modified":"2/18/17","designType":"emptyLines","Id":"emptyLinesChange2"}];
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
    // console.log(Session.get('oppty'));
    return Session.get('oppty');
  }
});















