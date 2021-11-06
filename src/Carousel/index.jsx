import React, { Component } from 'react'

import Slide from './Slide';
import Slider from './Slider'

const {slides} = {
    src:'https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/46/2020/10/Space_1.jpg'
}

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            width: 0,
            height: 0,
            
        };
    };
    setFullScreenMode = (isFullScreen) => {
        const {width, height} = this.state;
        if(isFullScreen){
            this.setState({
                width: 100,
                height: 100,
                
            })
    }else{this.setState({
        width: 0,
        height: 0,
    })}}
    setNextImage= ()=> {
        const {index} = this.props
        this.setState({index: index+1})
    }
    setPrevImage= ()=> {
        const {index} = this.props
        this.setState({index: index-1})
    }
    render() {
        
        const {slides} = this.props;
        const {index} = this.state
        return (
            <div>
                <Slide currentImage={slides[index]}/>
                <Slider next={this.setNextImage} prev={this.setPrevImage}  setFullScreenMode={this.setFullScreenMode} />                
            </div>
        );
    }
}

//window
//window.innerHeight
//window.innerWidth