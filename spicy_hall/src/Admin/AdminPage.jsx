import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "../Styles/AdminPage.css";
import { url } from "../Url";
import AdminProductCard from "./AdminProductCard";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Heading, SkeletonText, useToast } from "@chakra-ui/react";

export const AdminPage = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const toast = useToast()
  
//   useEffect(() => {
//     axios
//       .get(`${url}/recipes`)
//       .then((res) => {
//         setData(res.data.recipes);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
    .get(`${url}/recipes`)
      .then((res) => {
        // console.log(res);
        setData(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

    function handleRemoveRecipe(id) {
        axios
          .delete(`${url}/recipes/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res);
            toast({
              title: "Recipe has been deleted",
              description: res.data.msg,
              status: res.data.status,
              duration: 6000,
              isClosable: true,
              position: "top",
              colorScheme: "green"
            });
            if (res.data.status == 200) {
              fetchData();
            }
          })
          .catch((err) => {
            console.log(err);
            toast({
              position: "top",
              title: `Request Failed`,
              description: `Something went wrong please try again.`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
      }

  return (
    <DIV>
      {data.length === 0 ? (
        <div className="grid">
          {skeleton.map((el, i) => {
            return (
              <Box key={i} padding="0" bg="white" borderRadius="5px">
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="1"
                  skeletonHeight="52"
                />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="3"
                  skeletonHeight="3"
                />
              </Box>
            );
          })}
        </div>
      ) : data.length ? (
        <div className="main">
          <div className="grid">
            {data.length > 0 &&
              data.splice(0, 12).map((el, i) => {
                return <AdminProductCard key={i} {...el} handleRemoveRecipe={handleRemoveRecipe} />;
              })}
          </div>
          <Box>{/* <Pagination page={page} setPage={setPage} /> */}</Box>
        </div>
      ) : (
        <Box textAlign="center" py={35} px={6}>
          <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Sorry No Data Found
          </Heading>
        </Box>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  width: 70%;
  text-align: left;
  .main {
    height: auto;
    border-radius: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  .search {
    border: 3px solid #242424;
    border-radius: 10px;
    width: 30%;
    color: black;
    padding: 6px 10px;
  }
  img {
    margin: 10px 0;
  }
  .input {
    margin: 0 0 15px 0;
  }
  @media screen and (min-width: 901px) and (max-width: 1450px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
  }
  @media screen and (min-width: 710px) and (max-width: 1075px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
  @media screen and (max-width: 710px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
  }
`;
