var alt = require('../alt');
var ScheduleActions = require('../actions/ScheduleActions');


class ScheduleStore {

  constructor() {

    this.searchResults = [];
    this.enrolledSections = [];
    

    this.bindListeners({
      handleSearch: ScheduleActions.updateSearchResults,
      handleEnroll: ScheduleActions.addEnrolledSection,
      handleUnenroll: ScheduleActions.removeEnrolledSection

    });
  }

  handleSearch(response) {
   
   this.searchResults = response;
   
  }

  handleEnroll(index) {
    var section = this.searchResults.splice(index, 1)[0];
    this.enrolledSections.push(section);
    
  }

  handleUnenroll(index) {
    this.enrolledSections.splice(index, 1);

  }
 
}

module.exports = alt.createStore(ScheduleStore, 'ScheduleStore');