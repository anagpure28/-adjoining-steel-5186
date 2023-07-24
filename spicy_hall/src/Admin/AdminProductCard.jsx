import { Box, Image, Badge, Text, Flex, useToast } from "@chakra-ui/react";
import { BiFoodTag } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

function AdminProductCard({
  _id,
  images,
  name,
  category,
  course,
  description,
  like,
  timeRequired,
  timeRequire,
  handleRemoveRecipe,
}) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={"gray.300"}
    >
      <Image
        src={images[0]}
        alt={name}
        mt={"0"}
        w={"100%"}
        h={"300px"}
        cursor="pointer"
      />

      <Box pt="2" pl="4" pr="4" pb="2">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Badge
            colorScheme="transparent"
            borderRadius="5px"
            px="2"
            ml={"-2"}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {category == "Veg" ? (
              <BiFoodTag color="green" fontSize={"16px"} />
            ) : (
              <BiFoodTag color="red" fontSize={"16px"} />
            )}
            <Text>{category}</Text>
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="11px"
            textTransform="uppercase"
            mt="-1"
          >
            <Badge borderRadius="6px" px="2" bg="white">
              {course}
            </Badge>
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {name}
        </Box>

        <Box mt="1">
          {description ? description.substring(0, 60) + "..." : ""}
        </Box>

        <Box
          display="flex"
          mt="1"
          fontWeight={"500"}
          color="green.800"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex">
            {like.length}{" "}{" "}
            <button
              
            >
              <FaRegThumbsUp style={{ margin: "2.8px" }} />
            </button>{" "}
            | {timeRequired || timeRequire}{" "}
            <IoTime style={{ margin: "6px 2px" }} />
          </Box>
          <Flex
            p={1}
            mt={-1}
            border={"1px solid red"}
            borderRadius={"50%"}
            alignItems="center"
            justifyContent={"space-between"}
            cursor="pointer"
            onClick={(e) => {
                e.stopPropagation()
                handleRemoveRecipe(_id);
              }}
          >
            <MdDeleteForever fontSize={"20px"} color="red" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
export default AdminProductCard;
