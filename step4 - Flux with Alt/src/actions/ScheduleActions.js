var alt = require('../alt');
var SearchSource = require('../sources/SearchSource');


class ScheduleActions {


  updateSearchResults(sections) {
    return sections;
  }

  addEnrolledSection(index){
    return index;
  }

  removeEnrolledSection(index){
    return index;
  }



  searchSections(courseId) {
    return (dispatch) => {
      dispatch();

      SearchSource.request(courseId)
          .then((response) => {

            this.updateStore(response);
      })

   }
    

 }

  enrollSection(index) {
    return (dispatch) => {
      dispatch();

      this.addEnrolledSection(index);

    }

  }

  unenrollSection(index) {
    return (dispatch) => {
      dispatch();

      this.removeEnrolledSection(index);
    }

  }
  

}

module.exports = alt.createActions(ScheduleActions);
