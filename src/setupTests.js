import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from './fixtures';

global.mount = mount;
global.restaurants = restaurants;

Enzyme.configure({ adapter: new Adapter() });
