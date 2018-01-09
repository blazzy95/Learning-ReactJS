import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi.js';
import withClass from '../hoc/withClass.js';

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                { id: '123', name: 'abc', age: 23 },
                { id: '234', name: 'pqr', age: 29 },
                { id: '345', name: 'xyz', age: 26 }
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        }; 
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log('[UPDATE App.js] Inside componentWillReceiveProps()', nextProps, nextState);
    //    return true;
    //}

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate()');
    }

    //state = {
    //    persons: [
    //        { id: '123', name: 'abc', age: 23 },
    //        { id: '234', name: 'pqr', age: 29 },
    //        { id: '345', name: 'xyz', age: 26 }
    //    ],
    //    showPersons: false
    //}; 

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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    deletePersonHandler = (personIndex) => {
        const newpersons = [...this.state.persons];
        //const newpersons = this.state.persons;
        newpersons.splice(personIndex, 1);
        this.setState({ persons: newpersons });
        console.log(newpersons);
    };

    render() {
        console.log('[App.js] inside render()');
        let persons = null;

        if (this.state.showPersons)
        {
            persons = <Persons persons = {this.state.persons}
					clicked = {this.deletePersonHandler}
					changed = {this.nameChangeHandler}/>;  
        }
		
        return (
            <Auxi>
                <button onClick={() => { this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit 
                    appTitle={this.props.title}
	                showPersons={this.state.showPersons}
	                persons = {this.state.persons}
	                clicked = {this.togglePersonsHandler}/>
                {persons}
            </Auxi>
    );
  }
}

export default withClass(App,classes.App);
