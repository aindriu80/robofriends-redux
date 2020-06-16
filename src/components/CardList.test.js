
import { shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card component', ()=>{
    const mockRobots = [
        {
            id: 1,
            name: 'Jone Wayne',
            username: 'JoneWayne',
            email: 'jonewayne@gmail.com'
        }
    ]
expect (shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})