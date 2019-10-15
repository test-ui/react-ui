import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'

import React from 'react'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

BraftEditor.use(CodeHighlighter({
    includeEditors: ['editor-with-code-highlighter'],
}))

class CodeHighlighterDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // 创建一个空的editorState作为初始值
            editorState: BraftEditor.createEditorState(null)
        }

    }

    async componentDidMount() {
        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        // this.setState({
            // editorState: BraftEditor.createEditorState(htmlContent)
        // })
        this.isLivinig = true
        // 3秒后更改编辑器内容
        setTimeout(this.setEditorContentAsync, 3000)
    }

    submitContent = async () => {
        // 保存
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        // const result = await saveEditorContent(htmlContent)
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
        })
    }

    handleChange = (editorState) => {
        console.log(editorState)
        const {setHtmlContent} = this.props
        window.editorState = editorState;
        setHtmlContent(editorState.toHTML())
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }



    render () {
        return (
            <div className="editor-container">
                <BraftEditor
                    id="editor-with-code-highlighter"
                    onChange={this.handleChange}
                />
            </div>
        )

    }

}

export default CodeHighlighterDemo
