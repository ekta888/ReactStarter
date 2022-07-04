import React from 'react';
import { shallow, wrapper, mount } from 'enzyme';
import Userdata from './Userdata';
import { UserContext } from "./Components/Tabs";
import { render, fireEvent } from '@testing-library/react'
//import ShallowRenderer from 'react-test-renderer/shallow';
jest.mock('react', () => {
	const ActualReact = jest.requireActual('react');
	return {
		...ActualReact,
		//useContext: () => ({ inputs: { firstName: 'test test' } }),
		useContext: () => ({ inputs: { firstName: 'test', lastName: 'test', email: 'test@test.com' } }),
	};
});
test.only('that the LanguageSelect component exists', () => {
	const wrapper = shallow(<Userdata />)

	//	const wrapper = shallow(<Userdata user={{ user }} />);
	const h3 = wrapper.find("h3");
	const result = h3.text();
	const h4 = wrapper.find("h4");
	const txt = h4.text();
	//console.log("here", result);
	expect(result).toBe("Name:test test");
	expect(txt).toBe("Email: test@test.com");
	wrapper.unmount();
})


