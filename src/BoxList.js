import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const INITIAL_STATE = [
    {
      backgroundColor: 'purple',
      width: 250,
      height: 250
    }
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox,id:Date.now() } ]);
  };
  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box=> box.id !== id));
  };


return (
  <div>
  <h3>Box List</h3>
  <NewBoxForm addBox={addBox} />
  <div>
    {boxes.map(({id, backgroundColor, width, height }) =>
    <Box
    backgroundColor={backgroundColor}
    key={id}
    id={id}
    width={width}
    height={height}
    removeBox={() => removeBox(id)}
    />)}
  </div>

  </div>

)


};






export default BoxList;