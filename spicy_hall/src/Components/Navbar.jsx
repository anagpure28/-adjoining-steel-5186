import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
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
import { NavLink, Link } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  { path: "/recipes", title: "Recipes" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" }
];

const links2 = [
  { path: "/register", title: "Signup / Register" },
  { path: "/adnin", title: "Admin Login" },
  { path: "/myrecipes", title: "My Recipes" }
]

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
      <Box bg={useColorModeValue("transparent")} color={"#ffca6f"} px={4}>
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
                      "https://e0.pxfuel.com/wallpapers/266/672/desktop-wallpaper-tom-cruise-background-black-closeup-face-men-face.jpg"
                    }
                  />
                </div>
              </MenuButton>
              <MenuList bg={"blackAlpha.800"}>
                <Link to={"/register"}><MenuItem bg={"gray.700"}>Signup / Register</MenuItem></Link>
                <MenuDivider />
                <Link to={"/admin"}><MenuItem bg={"gray.700"}>Admin Login</MenuItem></Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links2.map(({path, title}) => (
                <NavLink key={path} to={path}>{title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
