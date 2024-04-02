import React from 'react';


const Box = ({ id,backgroundColor, width, height,removeBox  }) => {
  return (

    <div className="Box"

    style={{
      backgroundColor:backgroundColor,
      width:`${width}px`,
      height:`${height}px`,
      position:'relative'

    }}>
      <div><button
      onClick={()=>removeBox(id)}
      style = {{
      position: 'absolute',
      right: '0',
      top: '0',
      cursor: 'pointer'

      }}>x</button>
      </div>


    </div>
  );
};


export default Box;