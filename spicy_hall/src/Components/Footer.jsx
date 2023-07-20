import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import pay from "../Images/Home/pay.png"
import app from "../Images/Home/app.png"

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("black", "black")}
        color={useColorModeValue("gray.500", "gray.500")}
      >
        <Container as={Stack} maxW={"6xl"} py={10} fontWeight={"bold"} fontSize={"1.1rem"}>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"}>
            <p style={{fontSize: "22px"}}>Product</p>
              <Link href={"#"}>Overview</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
            <p style={{fontSize: "22px"}}>Company</p>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
            <p style={{fontSize: "22px"}}>Support</p>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <p style={{fontSize: "22px"}}>Follow Us</p>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
            <Stack align={"flex-start"}>
            <p style={{fontSize: "22px"}}>Install App</p>
              <div style={{width: "65%", marginTop: "-5px"}}>
                <img src={app} alt="" />
              </div>
              <div style={{width: "65%", marginTop: "5px"}}>
                <img src={pay} alt="" />
              </div>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "column" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ sm: "center", md: "center" }}
          >
            <Text fontSize={"lg"}>© 2023 Spicy-Hall. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
