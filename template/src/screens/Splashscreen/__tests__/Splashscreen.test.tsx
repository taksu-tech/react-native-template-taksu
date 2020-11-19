import { shallow } from 'enzyme';
import React from 'react';
import SplashScreen from '../SplashScreen';

describe('Splash Screen', () => {
    it('renders correctly', () => {
        shallow(<SplashScreen navigation={{} as any} />);
    });

    it('take snapshot', () => {
        const wrapper = shallow(<SplashScreen navigation={{} as any} />);

        expect(wrapper).toMatchSnapshot();
    });
});
