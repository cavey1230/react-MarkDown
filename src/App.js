import React, {Component} from 'react';
import "../src/css/App.css";
import {UserTextArea} from '../src/react/UserTextArea';
import {Markdown} from '../src/react/Markdown';


class App extends Component {
    render() {
      const textarea = this.props.textArea;
      const addinput = this.props.addInput;
        return (<div id="App">
          <UserTextArea textArea={textarea} addInput={addinput}></UserTextArea>
          <Markdown textArea={textarea}></Markdown>
        </div>)
    }
}

export default App;
