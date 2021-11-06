import React from "react";
import Carousel from "./Carousel";

const {slides} = [{
  src:'https://ak.picdn.net/shutterstock/videos/26887384/thumb/1.jpg?ip=x480'
},
{
  src:'https://ak.picdn.net/shutterstock/videos/26887384/thumb/1.jpg?ip=x480'
},
{
  src:'https://ak.picdn.net/shutterstock/videos/26887384/thumb/1.jpg?ip=x480'
},]

const App = () => {
  return(<Carousel slides={slides}/>)
}

export default App