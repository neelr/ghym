import React from "react"

export default class Dragdrop extends React.Component{
    ref = React.createRef()

    state = {
        dragging: false
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0){
            this.setState({dragging: true})
        }
    }

    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if(this.dragCounter > 0) return
        this.setState({dragging: false})
    }

    handleDrop = (e) => {    
        e.preventDefault()
        e.stopPropagation()
    }


    componentDidMount(){
        this.dragCounter = 0
        let div = this.ref.current;
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount(){
        let div = this.ref.current
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
