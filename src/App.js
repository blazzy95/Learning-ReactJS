import React, { Component } from 'react';
import classes from './App.css';
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

        let persons = null;
		let btnClass = '';

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

			btnClass = classes.Red;
        }

		const assignedClasses = [];
		if(this.state.persons.length <= 2)
		{
			assignedClasses.push(classes.red);
		}
		if(this.state.persons.length <= 1)
		{
			assignedClasses.push(classes.bold);
		}


    return (
      <div className={classes.App}>
            <h1>Hi! I'm a React app</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className = {btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
      </div>
    );
  }
}

export default App;
