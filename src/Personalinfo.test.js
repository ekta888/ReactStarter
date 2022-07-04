import React from 'react';
import { shallow, wrapper, mount } from 'enzyme';
import PersonalData from './Personalinfo';

describe('Personal Data', () => {
	it('should email are provided', () => {
		const data = {
			inputs: function () {
				return {
					email: "test@test.com",
					password1: "test",
					password2: "test",
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
		const personaldataComponent = shallow(<PersonalData data={data} />);
		expect(personaldataComponent.find('.personalinfo').length).toBe(1);
		const buttonElement = personaldataComponent.find('#updatepersonalinfo');
		expect(buttonElement).toHaveLength(1);
		expect(buttonElement.text()).toEqual('Save');
		// userComponent.find('.form-login').simulate('submit', fakeEvent);
		// expect(userComponent.find(Notification).length).toBe(1);

	});
})