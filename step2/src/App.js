import React, { Component } from 'react';
import './App.css';


class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      sections: [],

    };

    this.renderSections = this.renderSections.bind( this )

  }

  render() {

    const ul_style = {

      'listStyle': 'none'
    };

    return (
    <div>
      <ul style={ ul_style }>
        { this.renderSections() }
      </ul>
      
    </div>
    );
  }


  renderSections() {
    var sections = [];

    for (var i = 0; i < this.state.sections.length; i++) {
      sections.push(
        React.createElement( 'li',
          {},
          <Section section_id={ this.state.sections[ i ].section_id }
                   instructors={ this.state.sections[ i ].instructors }
                   meetings={ this.state.sections[ i ].meetings }
                   seats={ this.state.sections[ i ].seats } />
        )
      );

    }

    return sections
  }



}



class SearchBox extends Component {



}


class SearchResults extends Component {


}


class Section extends Component {
  render() {
    return (

    <div>
      <h3>{ this.props.section_id }</h3>
      <p>
        { this.props.instructors }
        <br/>
      </p>
      <p>
        { this.props.meetings }
        <br/>
      </p>
      <p>
        Seats:
        { this.props.seats }
        <br/>
      </p>
    </div>
    )
  }
}


class App extends Component {
  render() {
    return (
    <div >
      <CourseList />
    </div>
    );
  }
}

export default App;
