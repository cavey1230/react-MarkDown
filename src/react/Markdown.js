import React, {Component} from "react";

const myMarked = require('marked');

myMarked.setOptions({
    renderer: new myMarked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

console.log(myMarked('I am using __markdown__.'));

class Markdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mkdown = myMarked(this.props.textArea.textArea);
        return (
            <div id="preview" dangerouslySetInnerHTML={{
                __html: mkdown
            }}>
            </div>
        )
    }
}

export {Markdown};