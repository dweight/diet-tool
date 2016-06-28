import React from 'react';

class EditorToolbar extends React.Component {
  render() {
    return (
      <div>
        <span>Day</span>
        <select name="day" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span>Meal</span>
        <select name="meal">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button>Add item</button>
        <button>Add meal</button>
        <button>Add day</button>
      </div>
    )
  }
}

export default EditorToolbar;
