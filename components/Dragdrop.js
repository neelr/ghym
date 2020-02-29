import React from "react"

export default class Dragdrop extends React.Component{
    ref = React.createRef()

    componentDidMount(){
        let div = this.ref.current;
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }
    render(){
        return(
            <div ref={this.ref}>
                {this.props.children}
            </div>
        )
    }
}