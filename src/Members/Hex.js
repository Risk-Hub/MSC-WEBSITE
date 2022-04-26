import React from 'react';
import Hexagon from 'react-hexagon';

const Hex = () => {
  return (
    <div>
       <Hexagon
    style={{stroke: '#42873f', height: "100px",
      width: "100px"}}
    backgroundImage="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    href="http://espen.codes/"
    diagonal="200"
  />
    </div>
  )
}

export default Hex;