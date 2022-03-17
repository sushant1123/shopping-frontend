import React from "react";
import { Container, Button, Desc, Input, InputContainer, Title } from "./newsLetter.styles";
import { Send } from "@mui/icons-material";

const NewsLetter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default NewsLetter;
