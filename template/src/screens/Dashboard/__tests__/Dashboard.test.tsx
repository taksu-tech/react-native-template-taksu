import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../Dashboard';

describe('Dashboard Screen', () => {
    it('renders correctly', () => {
        shallow(<Dashboard />);
    });

    it('take snapshot', () => {
        const wrapper = shallow(<Dashboard />);

        expect(wrapper).toMatchSnapshot();
    });
});
