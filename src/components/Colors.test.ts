import React from 'react';
import ReactDOM from 'react-dom';
import Colours from './Colours';
import renderer from 'react-test-renderer';

// jest.mock('Colours');


it('colours work with mocked data', () => {
    expect.assertions(1);
    const coloursService = new Colours();
    return coloursService.getColours().then(colours => expect(colours[0]).toEqual('#20E4DF'));
});
