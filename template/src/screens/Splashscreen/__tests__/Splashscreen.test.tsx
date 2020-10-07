import { shallow } from 'enzyme';
import React from 'react';
import Splashscreen from '../Splashscreen';

describe('Splash Screen', () => {
    it('renders correctly', () => {
        shallow(<Splashscreen navigation={{} as any} />);
    });

    it('take snapshot', () => {
        const wrapper = shallow(<Splashscreen navigation={{} as any} />);

        expect(wrapper).toMatchSnapshot();
    });
});
