import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('AppTest', () => {
    it('renders correctly', () => {
        shallow(<App />);
    });

    it('take snapshot', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});
