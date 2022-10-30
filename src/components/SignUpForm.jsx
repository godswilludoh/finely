import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
		>
			{(formik) => (
				<div>
					<h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
					{console.log(formik.values)}
					<Form>
						<TextField label='First Name' name='firstName' type='text' />
						<TextField label='Last Name' name='lastName' type='text' />
						<TextField label='Email' name='email' type='email' />
						<TextField label='Password' name='password' type='password' />
						<TextField
							label='Confirm Password'
							name='confirmPassword'
							type='password'
						/>

						<button className='btn btn-dark mt-3' type='submit'>
							Register
						</button>

						<button className='btn btn-danger mt-3 ml-5' type='reset'>
							Reset
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};
export default SignUpForm;