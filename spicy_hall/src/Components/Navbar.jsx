import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../Images/Home/logo.png";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  { path: "/recipes", title: "Recipes" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     fontSize={"20"}
//     rounded={"md"}
//     _hover={{
//       color: useColorModeValue("white", "white"),
//       borderBottom: "4px solid gray",
//       fontsize: "22px",
//     }}
//     borderBottom={"1px solid #ffca6f;"}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

const defaultLinkStyle = {
  textDecoration: "none",
  color: "#ffca6f",
  fontSize: "20px",
  letterSpacing: "1px"
};
const activeLinkStyle = {
  width: "80px",
  textDecoration: "none",
  color: "white",
  borderBottom: "4px solid gray",
  borderRadius: "10px",
  paddingBottom: "3px",
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "1px",
  margin: "auto"
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        zIndex: 10,
        position: "sticky",
        width: "100%",
        top: "0px",
        borderBottom: "1px solid #ffca6f;",
        backgroundColor: "black",
      }}
    >
      <Box bg={useColorModeValue("transparent")} color={"#ffca6f;"} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={"center"}>
            <Box w={"65px"} ml={10}>
              <img src={logo} alt="" />
            </Box>
            <HStack
              as={"nav"}
              spacing={12}
              display={{ base: "none", md: "flex" }}
            >
              {links.map(({path, title}) => (
                <NavLink style={({ isActive }) => {
                  return isActive ? activeLinkStyle : defaultLinkStyle;
                }} key={path} to={path}>
                  {title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} mr={3}>
            <Menu>
              <MenuButton
                as={Button}
                border={"3px solid white"}
                p={1}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                _hover={{
                  border: "3px solid #f76363",
                }}
                minW={0}
              >
                <div>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </div>
              </MenuButton>
              <MenuList bg={"blackAlpha.800"}>
                <MenuItem bg={"gray.700"}>Signup / Register</MenuItem>
                <MenuDivider />
                <MenuItem bg={"gray.700"}>Admin Login</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
