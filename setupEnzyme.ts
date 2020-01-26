import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

console.log('--- Setuping Enzyme ---');
configure({ adapter: new EnzymeAdapter() });
