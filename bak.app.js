import './src/styles.css';
import {useState, useEffect} from 'react';

const NotApp = () => {

    //this is now part of the react state so counter cannot be manually mutated
    //code like this counter = 100 where you want to update the app can break it
    // instead use the setCounter function as this update, is its intended use
    const [counter, setCounter] = useState(0); //whenever you call something a function, and it starts with use, this called a hook in react

    //this code run as soon as the app component is rendered
    //this is effective in calling code whenever something happening your app
    //and if the code depends on another component in the app this can be "injected"
    //into the callback fn
    useEffect(() => {
        alert(`Counter has been updated to  ${counter}`)
    }, [counter]);

    return (
        <div className="App">
            {/* Adding a callback function*/}
            {/*onClick={() => alert('clicked')} using alert to check that event is being registered by react*/}
            <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((nextCounter) => nextCounter + 1)}>+</button>
        </div>
    );
};

export default App;

/*
const App = () => {


    //this is a person component
    //a component is an object that renders dom elements
    //props allow you to pass dynamic data into react components aka properties
    //state in a react is a plain js obj used in react to present information about
    //the component's current information
    const Person = (props) => {
        return (
            <div data-cy="person">
                <h1> Name : {props.name}</h1>
                <h2>Last Name : {props.lastName}</h2>
                <h2>Age : {props.age}</h2>
            </div>
        );
    };

    return (
        <div className="App">
            <Person
                name="Jamie"
                lastName={'Selemani'}
                age={29}
            />

            <Person
                name={'Josh'}
                lastName={'Lucinda'}
                age={25}
            />
        </div>
    );
}; */