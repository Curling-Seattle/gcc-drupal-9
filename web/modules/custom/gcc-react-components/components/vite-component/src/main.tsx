import React from 'react';
import { render } from 'react-dom';
 
const Root = () => {
 return (
   <>Hi there</>
 )
}

console.log(window);
render(<Root/>, document.querySelector('#my-app-target'));