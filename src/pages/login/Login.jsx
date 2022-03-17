import React from "react";

import { Container, Button, Form, Input, Link, Title, Wrapper } from "./login.styles";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="Username" />
					<Input placeholder="Password" />
					<Button>LOGIN</Button>
					<Link>FORGOT PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
