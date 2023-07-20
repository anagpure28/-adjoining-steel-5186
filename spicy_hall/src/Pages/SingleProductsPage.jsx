import { Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import styles from "../Css/SingleProducts.module.css";
import StarRating from '../Components/Stars';
const SingleProductsPage = () => {




    const { id } = useParams()
    console.log(id)
    const [data, setData] = useState([]);
    const [rest, setRest] = useState([])

    
    const ProductsUrl = `http://localhost:3000/data/${id}`;
  


    const fetchData = async () => {
      try {
        let res = await fetch(ProductsUrl);
        res = await res.json();
  console.log(res,"result single");
  
         setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      fetchData()
    }, [])





    
console.log(data.rating)
    return (
<div  className={`${styles.SingleProductPage}`} >
<div className={`${styles.SingleProduct}`} >
      <div className={`${styles.SingleImageConatiner}`}>
<img src={data.images && data.images[1]} alt="" />
      </div>
<div className={`${styles.SingleDescriptionConatiner}`}>
<h1>
  {data.name}
</h1>
<p id='rating'>{data.rating}
<i class="fa-regular fa-star"></i>
</p>

{/* <StarRating rating={data.rating} /> */}
</div>
    
        </div>
</div>
      );
}

export default SingleProductsPage
