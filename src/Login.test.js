import React from 'react';
import { shallow, wrapper, mount } from 'enzyme';
import Login from "./Container/Login";
import { MemoryRouter } from 'react-router-dom';
//Enzyme.configure({ adapter: new Adapter() })
// describe('Form', () => {
//     it('should capture fullname correctly onChange', () => {
//         const wrapper = shallow(<Login />)
//         const nameInput = wrapper.find('input').first()
//         nameInput.simulate('change', {
//             target: { value: 'ekta' },
//         })
//         expact(nameInput.props().value).toEqual('ekta')
//     })
// });