import React from 'react';
import { styled } from 'styled-components';
import styles from '../Css/ProfilePage.module.css';
const ProfilePage = () => {
  const obj = {
    username: "john_doe",
    email: "johndoe@example.com",
    gender: "Male",
    password: "abc123"
  };

  return (
    <Div className={`${styles.ProfilePage}`}>
      <div className='ProfilePageTitle'>
        <h1>My profile</h1>
      </div>
      <div className='ProfilePageContainer'>
        <div className='Profile'>
          <div className='image'>
            {/* <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" /> */}
            <h2>{obj.username}</h2>
          </div>
          <h3>{obj.username}</h3>
        </div>
        <div className='PostFormContainer'>
         
<div className='postForm'>
<form action="">
<input type="text" placeholder='Title' name='' />
<input type="text" placeholder='Images' name='' />
<input type="text" id='formDesc' placeholder='Description' name='' />
<select name="category" id="">
    <option value="">Category</option>
    <option value="veg">Veg</option>
    <option value="non-veg">Non-Veg</option>
</select>
<button type='submit'>Post Recipe</button>

</form>

</div>

        </div>
      </div>
    </Div>
  );
}

export default ProfilePage;

const Div = styled.div`
  background-color: #171819;
  color: white;
  padding: 20px; /* Add padding to the container */
  
  .ProfilePageTitle > h1 {
    font-size: 2.5rem;
    margin-bottom: 20px; /* Add margin to the title */
  }

  .ProfilePageContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px; /* Add gap between grid items */
  }

  .Profile {
    border: 2px solid orange;
    padding: 20px; /* Adjust the padding */
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Vertically align items */
  }

  .PostFormContainer {
    border: 2px solid red;
  }
.image{
    height: 200px;

background-color: #e4c590;

    display: flex;
    align-items: center;
}
  img {



  }

  h3 {
    margin-top: 20px; /* Add margin to the username */
    word-wrap: break-word; /* Allow the username to break into multiple lines */
    text-align: center; /* Center the username */
  }
form{
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 20px;
 margin:auto ;
}
input{
    height: 40px;
    margin: 5px;
    outline: none;
    color: black;
    padding: 0px 10px 0px;
}
#formDesc{

}
select{
    height: 40px;
    margin: 5px;
    outline: none;
    color: black;
    padding: 0px 10px 0px;
}
form>button{
    background-color: #e4c590;
    height: 40px;
    margin: 5px;
    outline: none;
    color: black;
    padding: 0px 10px 0px;
}
form>button:hover{
    border: 1px solid #e4c590;;
    background-color: #171819;
    height: 40px;
    margin: 5px;
    outline: none;
    color: #e4c590;;
    padding: 0px 10px 0px;
}
`;
