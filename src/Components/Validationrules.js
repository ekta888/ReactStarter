export default function validate(values) {
	console.log("values", values);
	let errors = {};
	if (!values.firstName) {
		errors.firstName = 'First Name is required';
	}
	if (!values.lastName) {
		errors.lastName = 'Last Name is required';
	}
	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	if (!values.password1) {
		errors.password1 = 'Password is required';
	} else if (values.password1.length < 8) {
		errors.password1 = 'Password must be 8 or more characters';
	}
	if (!values.password2) {
		errors.password2 = 'Password is required';
	} else if (values.password1 !== errors.password2) {
		errors.password2 = 'Password should match';
	}
	return errors;
};