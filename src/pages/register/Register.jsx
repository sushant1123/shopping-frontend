import React from "react";

import { Container, Wrapper, Input, Title, Form, Agreement, Button } from "./register.styles";

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="First name" />
					<Input placeholder="Last name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm Password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal data in accordance
						with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
