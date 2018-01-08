import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: '123', name: 'abc', age: 23 },
            { id: '234', name: 'pqr', age: 29 },
            { id: '345', name: 'xyz', age: 26 }
        ],
        showPersons: false
    }; 

    nameChangeHandler = (event, id) => {
        const personindex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personindex] };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personindex] = person;
        this.setState({persons: persons});

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    };

    deletePersonHandler = (personIndex) => {
        const newpersons = [...this.state.persons];
        //const newpersons = this.state.persons;
        newpersons.splice(personIndex, 1);
        this.setState({ persons: newpersons });
        console.log(newpersons);
    };

    render() {

        let persons = null;

        if (this.state.showPersons)
        {
            persons = <Persons persons = {this.state.persons}
					clicked = {this.deletePersonHandler}
					changed = {this.nameChangeHandler}/>;  
        }
		
    return (
      <div className={classes.App}>
		<Cockpit 
		showPersons={this.state.showPersons}
		persons = {this.state.persons}
		clicked = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
