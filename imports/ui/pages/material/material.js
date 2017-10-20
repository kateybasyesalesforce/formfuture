import './material.html';

import '../../components/detail/detail.js';
import '../../components/lookup/lookup.js';
import '../../components/pageHeader/pageHeader.js';
import '../../components/path/path.js';
import '../../components/pickList/pickList.js';
import '../../components/tabs/tabs.js';

const oppty = {"Name":"617 Information Computers, SM OFF 7","Account Name":"617 Information Computers","Close Date":"6/3/2017","Amount":"$1,671.00","Owner":"Charlette Seamon","Next Step":"","Probability (%)":"","StageName":"Unqualified","Type":"New Business","Lead Source":"Social","Order Number":null,"Campaign ID":"","Currency":"Euro","Expected Revenue":"$671.00","Description":"","Product":"","Campaign Source":"Facebook","Quote Needed":"Yes","Tracking Number":7238423,"Main Competitor":"Harvard & Associates","Flagged":"","Created":"9/15/2017","Last Modified":"2/18/17","designType":"noLines","Id":"noLinesAdd1"};
const contacts = [{"First Name":"Haruka","Last Name":"Aoyama","Email":"haruka@hillsiderecycleablesparts.com","Title":"VP Finance"},{"First Name":"Fernanda","Last Name":"Chapa","Email":"fernanda@hillsiderecycleablesparts.com","Title":"CEO"},{"First Name":"Natalia","Last Name":"Szostak","Email":"nszostak@duubu.com","Title":"Sales Associate"},{"First Name":"Aditya","Last Name":"Kukkar","Email":"akukkar@617-info-comps.com","Title":"CEO"},{"First Name":"Lindsey","Last Name":"Arledge","Email":"lindsey@clementinasystems.us","Title":"Chief Technology Officer"}];
const products = [{"Description":"Small Office Property Coverage","Family":"","Name":"Small Office Property Coverage","ProductCode":"AIC-BPOFF25-A"},{"Description":"Large Office Property Coverage","Family":"","Name":"Large Office Property Coverage","ProductCode":"AIC-BPOFF100-A"},{"Description":"Corporate Office Property Coverage","Family":"","Name":"Corporate Office Property Coverage","ProductCode":"AIC-BPOFF500-A"},{"Description":"Small Garage Property Coverage","Family":"","Name":"Small Garage Property Coverage","ProductCode":"AIC-BPGAR10-A"},{"Description":"Active Garage Property Coverage","Family":"","Name":"Active Garage Property Coverage","ProductCode":"AIC-BPGAR30-A"}];

Template.material.created = function(){
  Session.set('oppty', oppty);
  Session.set('pageHeader', [{"Account Name": oppty["Account Name"], "Close Date": oppty["Close Date"], "Amount": oppty["Amount"], "Owner": oppty["Owner"]}]);
}

Template.material.helpers({
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
  },
  oppty: function(){
    return Session.get('oppty');
  }
});

Template.material.events({
  'click .ff-cancel'(event, instance) {

  },
  'click .ff-editInline'(event, instance) {

  },
  'click .ff-save'(event, instance){

  }
});