import React, { Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass.js';
import Auxi from '../../../hoc/Auxi.js';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        this.inputElement.focus();
    }


    render() {
        console.log('[Person.js] inside render()');
        return (
            <Auxi>
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.Changed}
                    value={this.props.name} />
            </Auxi>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);