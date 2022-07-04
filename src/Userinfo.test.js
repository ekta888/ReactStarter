import React from 'react';
import { shallow, wrapper, mount } from 'enzyme';
import Userinfo from './Userinfo';
describe('User info', () => {
	it('data is provided', () => {
		const data = {
			inputs: function () {
				return {
					firstName: "test",
					lastName: "test"
				}
			},
			handleInputChange: function () {
				return "";
			},
			handleSubmit: function () {
				return "";
			}
		}
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		const userComponent = shallow(<Userinfo data={data} />);
		expect(userComponent.find('.userinfo').length).toBe(1);
		const buttonElement = userComponent.find('#userupdate');
		expect(buttonElement).toHaveLength(1);
		expect(buttonElement.text()).toEqual('Save');
		// userComponent.find('.form-login').simulate('submit', fakeEvent);
		// expect(userComponent.find(Notification).length).toBe(1);
	});
}); 
