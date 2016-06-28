import React from 'react';

class EditorToolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <div className="toolbar-selects">
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
        </div>
        <div className="toolbar-buttons">
          <button>Add item</button>
          <button>Add meal</button>
          <button>Add day</button>
        </div>
      </div>
    )
  }
}

export default EditorToolbar;
