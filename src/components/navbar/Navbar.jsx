import React from "react";
import {
	Container,
	Left,
	Wrapper,
	Center,
	Right,
	Language,
	SearchContainer,
	Input,
	Logo,
	MenuItem,
} from "./navbar.styles.js";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						{/* <input type="text" /> */}
						<Input></Input>
						<Search />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>SHOPPIFIED.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={2} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
