import React, { Component } from 'react'

export class Slide extends Component {
    constructor(props){
        super(props);
        const img = new Image();
        this.state= {
            img,
            slides:'https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/46/2020/10/Space_1.jpg',
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
        const {images} = this.props;
        return (
            <div>
                <img src={images.src}>
                    <figcaption>{images.title}</figcaption>
                </img>                
            </div>
        )
    }
}

export default Slide;
