import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../Styles/NotFound.css"

export default function NotFound() {
  return (
    <div>
      <Box textAlign="center" py={250} px={6} className='notfound-bg'>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          color={"gray.400"}>
          404
        </Heading>
        <Text fontSize="58px" mt={3} mb={2} color={"gray.400"}>
          Page Not Found
        </Text>
        <Text color={'gray.300'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link to="/">
          <button className='notfound-button'>Go the Home</button>
        </Link>
      </Box>
    </div>
  )
}