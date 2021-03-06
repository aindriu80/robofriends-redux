import { shallow } from 'enzyme';
import  React from 'react';
import MainPage from './MainPage';

let wrapper;
let wrapper2;
let wrapper3;

beforeEach(()=>{
    const mockProps ={
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPAge without crashing', ()=>{
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', ()=>{
    const mockProps2 ={
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }

    wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);   
})


it('filters robots correctly part 2', ()=>{
    const mockProps3 ={
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = []
    wrapper3 = shallow(<MainPage {...mockProps3}/>)    
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);   
})
