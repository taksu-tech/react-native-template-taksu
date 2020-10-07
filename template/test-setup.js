import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// enzyme adapter
enzyme.configure({ adapter: new Adapter() });

// mock
jest.mock('react-native-gesture-handler', () => {});
