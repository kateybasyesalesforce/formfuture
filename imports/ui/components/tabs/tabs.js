import './tabs.html';

import '../../components/card/card.js';
import '../../components/detailEdit/detailEdit.js';
import '../../components/inputEdit/inputEdit.js';
import '../../components/inputRead/inputRead.js';

Template.inputRead.events({
  'click .ff-editInline'(event, instance) {
    Session.set('editIsVisible', true);
    Session.set('readIsVisible', false);

    Session.set('whichField', event.target.id.split('-')[1]);
    var whichField = Session.get('whichField');
    var el = $('#edit-'+whichField)[0];
    		el.focus();
    // console.log($($(this).closest('.slds-tabs_default')));
    console.log(el.value);
  },
  'click .ff-cancel'(event, instance) {
    Session.set("editIsVisible", false);
    Session.set("readIsVisible", true);
  },
});