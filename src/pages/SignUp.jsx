import React from 'react';
import SignupImg from '../assets/signup.png';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
	return (
		<div className='container mt-3 mb-3'>
			<div className='row'>
				<div className='col-md-5'>
					<SignUpForm />
				</div>
				<div className='col-md-7'>
					<img className='img-fluid w-100' src={SignupImg} alt='signup img' />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
