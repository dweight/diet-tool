import React from 'react';

class InfoSelected extends React.Component {
  render() {
    return (
      //TODO - take vales from props
      <ul className="SelectedInfo">
        <li>kcal<span>1</span></li>
        <li>proteins<span>1</span></li>
        <li>carbohydrates<span>1</span></li>
        <li>fats<span>1</span></li>
        <li>sturated fats<span>1</span></li>
        <li>unsaturated fats<span>1</span></li>
      </ul>
    )
  }
}

export default InfoSelected;
