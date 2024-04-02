import React, { useState } from "react";


const NewBoxForm = ({addBox}) => {
  const initialState = {
    backgroundColor: "",
   width: "",
    height: ""
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { backgroundColor, width, height } = formData;
    addBox(formData)
    setFormData(initialState)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

      <div>
      <label htmlFor="backroundColor">Backround Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="background color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
</div>
<div>
      <label htmlFor="width">width</label>
      <input
        type="text"
        placeholder="width"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />
</div>
      <label htmlFor="height">Height</label>
      <input
        type="text"
        placeholder="height"
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      />
<div>
      <button>create box</button>
      </div>
    </form>
    </div>
  )
}

export default NewBoxForm