import React from 'react';

class Item extends React.Comoponent {
  render() {
    return (
      <div>
        <span>Item Name</span>
        <span>Item QTT</span>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    )
  }
}

export default Item;
