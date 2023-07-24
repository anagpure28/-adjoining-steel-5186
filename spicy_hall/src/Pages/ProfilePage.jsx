import React, { useEffect, useState } from "react";
import styles from "../Css/ProfilePage.module.css";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  Input,
  Text,
  Flex,
  Select,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormHelperText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

// Initial form state
const initialState = {
  images: [],
  video: "",
  name: "",
  category: "",
  ingredients: "",
  directions: "",
  course: "",
  timeRequired: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  proteins: 0,
};

const url = "https://spicy-hall.onrender.com";

const ProfilePage = () => {
  const [myRecipe, setMyrecipe] = useState([]);
  const [change, setChange] = useState(false);

  const getMyRecipes = (url) => {
    const token = localStorage.getItem("token");
    axios
      .get(`${url}/recipes/my-recipes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMyrecipe(res.data.recipes);
        setChange((pre) => !pre);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (_id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${url}/recipes/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setChange((pre) => !pre);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMyRecipes(url);
  }, [change]);

  const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialState);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const newRecipe = { ...formData, images: [formData.images] };
      console.log(newRecipe);
      const token = localStorage.getItem("token");
      axios
        .post(`${url}/recipes`, newRecipe, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setChange((pre) => !pre);
        })
        .catch((error) => console.log(error));
      setFormData(initialState);
      closeModal();
    };

    const handleNextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
      setStep((prevStep) => prevStep - 1);
    };
    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <Box p={4}>
        <Flex>
          <Button
            onClick={openModal}
            colorScheme="inherit"
            size="sm"
            color={"#ffca6f"}
            backgroundColor={"inherit"}
            fontSize={20}
            border="1px solid #ffca6f"
          >
            <RiAddFill />
          </Button>
          <Text color={"#ffca6f"} ml={"5px"}>
            Add Recipe
          </Text>
        </Flex>

        <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
          <ModalOverlay />
          <ModalContent
            backgroundColor={"rgba(000 , 000  , 000 , 0.7)"}
            border={"1px solid #ffca6f"}
            color={"white"}
          >
            <ModalHeader>Post Your Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Stack spacing={3}>
                    <Flex>
                      <FormControl mr="5%">
                        <FormLabel>Image</FormLabel>
                        <Input
                          placeholder="Image Link"
                          color="#FFFFFF"
                          type="text"
                          name="images"
                          value={formData.images}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Video</FormLabel>
                        <Input
                          placeholder="Video Link"
                          color="#FFFFFF"
                          type="text"
                          name="video"
                          value={formData.video}
                          onChange={handleChange}
                          size="sm"
                        />
                        <FormHelperText>
                          Provide link if available
                        </FormHelperText>
                      </FormControl>
                    </Flex>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        placeholder="Name of Recipe"
                        color="#FFFFFF"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        size="sm"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Category</FormLabel>
                      <Select
                        variant="filled"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        size="sm"
                        backgroundColor={"green.100"}
                      >
                        <option>--Select Category--</option>
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non-Veg</option>
                      </Select>
                    </FormControl>
                  </Stack>
                )}
                {step === 2 && (
                  <Stack spacing={3}>
                    <FormControl>
                      <FormLabel>Ingredients</FormLabel>
                      <Textarea
                        type="text"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        placeholder="Ingredients required for your Recipe"
                        size="sm"
                      />
                      <FormHelperText>
                        Please add "|" after each Ingredient
                      </FormHelperText>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Steps </FormLabel>
                      <Textarea
                        type="text"
                        name="directions"
                        value={formData.directions}
                        onChange={handleChange}
                        placeholder="Add steps for yourRecipe"
                        size="sm"
                      />
                      <FormHelperText>
                        Please add "|" after each Step
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                )}
                {step === 3 && (
                  <Stack spacing={3}>
                    <Flex>
                      <FormControl mr="5%">
                        <FormLabel>Course</FormLabel>
                        <Select
                          variant="filled"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          size="sm"
                          backgroundColor={"green.100"}
                        >
                          <option>--Select Course--</option>
                          <option value="Breakfast">Breakfast</option>
                          <option value="Lunch">Lunch</option>
                          <option value="Dinner">Dinner</option>
                          <option value="Snack">Snack</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Time Required</FormLabel>
                        <Input
                          placeholder="Time Required"
                          color="#FFFFFF"
                          type="text"
                          name="timeRequired"
                          value={formData.timeRequired}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                    </Flex>
                    <Flex>
                      <FormControl mr="5%">
                        <FormLabel>Calories</FormLabel>
                        <Input
                          placeholder="Calories"
                          color="#FFFFFF"
                          type="text"
                          name="calories"
                          value={formData.calories}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Fats</FormLabel>
                        <Input
                          placeholder="Fats"
                          color="#FFFFFF"
                          type="text"
                          name="fat"
                          value={formData.fat}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                    </Flex>
                    <Flex>
                      <FormControl mr="5%">
                        <FormLabel>Carb</FormLabel>
                        <Input
                          placeholder="Carbs"
                          color="#FFFFFF"
                          type="text"
                          name="carbs"
                          value={formData.carbs}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Protines</FormLabel>
                        <Input
                          placeholder="Protines"
                          color="#FFFFFF"
                          type="text"
                          name="proteins"
                          value={formData.proteins}
                          onChange={handleChange}
                          size="sm"
                        />
                      </FormControl>
                    </Flex>
                  </Stack>
                )}
              </form>
            </ModalBody>
            <ModalFooter>
              {step > 1 && (
                <Button
                  onClick={handlePrevStep}
                  mr={3}
                  colorScheme="red"
                  size="sm"
                >
                  <GrFormPreviousLink fontSize={25} />
                </Button>
              )}
              {step < 3 && (
                <Button onClick={handleNextStep} colorScheme="green" size="sm">
                  <GrFormNextLink fontSize={25} />
                </Button>
              )}
              {step === 3 && (
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  size="sm"
                  fontSize={20}
                >
                  Submit
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  };

  const PostCard = ({ images, name, description, _id, handleDelete }) => {
    return (
      <CardBox className="CardBox">
        <div className="Cardimage">
          <img src={images[1]} alt="" />
        </div>
        <div className="CardDetails">
          <h1>{name}</h1>
          <p>{description.substring(0, 300)} .... </p>
          <div className="LikeSection">
            <Link id="Link" to={`/recipes/${_id}`}>
              Read More...
            </Link>
            <button>
              <i class="fa-regular fa-heart"></i>
            </button>
            <Button>
              <MdDeleteForever onClick={() => handleDelete(_id)} />
            </Button>
          </div>
        </div>
      </CardBox>
    );
  };

  return (
    <Box className={styles.ProfilePage}>
      <MultiStepForm />
      {myRecipe.length > 0 ? (
        myRecipe?.map((ele, i) => (
          <PostCard key={i} {...ele} handleDelete={handleDelete} />
        ))
      ) : (
        <Heading color={"#ffca6f"}>
          Make Your First Post.. share your kichens secrete with world
        </Heading>
      )}
    </Box>
  );
};

export default ProfilePage;

const CardBox = styled.div`
  color: white;
  display: grid;
  padding: 25px;
  grid-template-columns: 54% 43%;
  justify-content: space-between;
  max-height: 80vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.153);
  .Cardimage > img {
    border-radius: 15px;
    width: 100%;
    height: 350px;
  }
  .CardDetails {
    border-radius: 15px;
    padding: 15px;

    justify-content: center; /* Center the content horizontally */
    align-items: center;
    text-align: left;
  }
  h1 {
    font-size: 2.5rem;
  }
  .CardDetails > p {
    text-align: justify;
    margin: auto;
  }
  button {
    background-color: #e4c590;
    height: 50px;
    width: 50px; /* Set the width to the same value as the height */
    font-size: 20px;
    border-radius: 50px;
    padding: 10px;
    color: black;
  }

  #Link {
    color: #e4c590;
    font-size: 25px;
  }
  Link:hover {
    font-size: 16px;
  }
  .LikeSection {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;