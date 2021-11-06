import React, { Component } from 'react'

export class Slide extends Component {
    constructor(props){
        super(props);
        const img = new Image();
        this.state= {
            img,
           
        }
    }
    load = () => {
        const {img} = this.state;
        const {images: {src}} = this.props;
        img.src = src;
    }
    componentDidMount(){ this.load(); }
    render() {
        const {img} = this.state;
        const {cur, index} = this.props;
        return (
            <div>
                <img src={cur.src[index]}>
                    
                </img>                
            </div>
        )
    }
}

export default Slide;
