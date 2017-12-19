import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons)
        {
            persons = (
                < div >
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            Changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })}
                </div>        
            );
        }

    return (
      <div className="App">
            <h1>Hi! I'm a React app</h1>
            <p>This is working</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
      </div>
    );
  }
}

export default App;
