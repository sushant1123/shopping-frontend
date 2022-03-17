import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import {
	Center,
	Container,
	Right,
	Left,
	Logo,
	Desc,
	SocialContainer,
	SocialIcon,
	Title,
	List,
	ListItem,
	ContactItem,
	Payment,
} from "./footer.styles";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>SHOPPIFIED.</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum available, but the majority have
					suffered alteration in some form, by injected humour, or randomised words which don’t look
					even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 622 ABC Road , XYZ City, 123456
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +91 1234567890
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> contact@mern-web.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
