import React from 'react';
import "./index.css"
import ImgWrap from "./play/index"
import ScrollTest from "./play/scrollTest"
import EditorDemo from "./play/editor"
import Tabs from "./play/tabs"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            htmlContent: ""
        }
    }

    setHtmlContent = htmlContent => {
        this.setState({ htmlContent })
    }

    render () {
        const { htmlContent } = this.state
        console.log(htmlContent)
        return (
            <div className="App">
                <ScrollTest />
                <hr/>
                <ImgWrap />
                <EditorDemo setHtmlContent={this.setHtmlContent} />
                <div className="htmlContent">
                    {htmlContent}
                </div>
                <Tabs />
            </div>
        );
    }
}

export default App;
