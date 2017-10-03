import './testPage.html';

import '../../components/detail/detail.js';
import '../../components/lookup/lookup.js';
import '../../components/pageHeader/pageHeader.js';
import '../../components/path/path.js';
import '../../components/pickList/pickList.js';
import '../../components/tabs/tabs.js';

Template.testPage.helpers({
  whichPage: function(){
  	return FlowRouter.current().params.whichPage;
  }
});