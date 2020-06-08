import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";
import {textAreaReducer, inputAction} from "./redux/reducer/textAreaReducer"


const combin = combineReducers({
    textArea: textAreaReducer
})
const store = createStore(combin);
console.log(store.getState());
const mapStateToProps = (state) => {
    return {
        textArea: state
}
}

const mapActionToProps = (dispatch) => {
    return {
        addInput:(userInput) => {
            dispatch(inputAction(userInput))
        }
    }
}

const Con = connect(mapStateToProps,mapActionToProps)(App);
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Con />
        </Provider>,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);


serviceWorker.unregister();
