import React from 'react';
import EditorToolbar from './EditorToolbar';
import Info from './Info';
import InfoSelected from './InfoSelected';

class Editor extends React.Component {
  render() {
    return (
      <div clas className="content">
      <h3>Editor</h3>
      <EditorToolbar />
      <Info />
      <InfoSelected />
      </div>
    )
  }
}

export default Editor;
