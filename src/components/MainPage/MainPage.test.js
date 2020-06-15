import { shallow } from 'enzyme';
import  React from 'react';
import App from '../../containers/App';

it('expect to render Counter Button component', ()=>{
    const mockStore ={
        robots:[],
        searchField: ''
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
})

