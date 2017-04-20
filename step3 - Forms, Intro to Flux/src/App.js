import React, { Component } from 'react';
import logo from './logo.svg';
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
      <h3>Total Credits: { this.state.credits }</h3>
    </div>
    );
  }


  renderSections() {
    var sections = [];

    for (var i = 0; i < this.state.sections.length; i++) {
      sections.push(
        React.createElement( 'li',
          {},
          <Section section_num={ this.state.sections[ i ].section_num }
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

  constructor() {
    super();
    this.state = {
      val: ''

    }

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( event ) {
    this.setState( {
      val: event.target.value.toUpperCase()
    } );
  }

  handleSubmit( event ) {
    event.preventDefault();

    //then what?
  }


  render() {
    return (
    <div>
      <form onSubmit={ this.handleSubmit }>
        <label>
          Course Name:
          <input type="text"
                 value={ this.state.val }
                 onChange={ this.handleChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>


    );

  }

}


class SearchResults extends Component {


}


class Section extends Component {
  render() {
    return (
    <div className="section">
      <h3>{ this.props.section_num }</h3>
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
    <div className="App">
      <CourseList />
    </div>
    );
  }
}

export default App;
