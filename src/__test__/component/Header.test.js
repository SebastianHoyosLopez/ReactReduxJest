import React from 'react';
import Header from '../../components/layout/Header';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
	const wrapper = shallow(<Header />);
	wrapper.render();
	expect(true).toBe(true)
})

