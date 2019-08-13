import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './Board';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
    const component = renderer.create(
        <Board test={true}/>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot(); 

});

