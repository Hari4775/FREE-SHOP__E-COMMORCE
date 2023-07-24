import React, { useState } from 'react'
import { useEffect } from 'react'
import axios, { all } from 'axios'
import {Button,Card} from 'react-bootstrap';
import "../App.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Catageryslice, Setsingle} from '../Redux/slice'
import {useHistory} from "react-router-dom"
import {searchSlice} from "../Redux/slice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductList = () => {

const [allproducts,setAllproducts] = useState([]);
const [searchProductdata,setSearchProductdata]=useState([])
const [catagery,setCatagery]=useState([])
const [currentPage, setCurrentPage] = useState(1);

const selectedCategory=useSelector((state)=>state.cata);
const searchQuery = useSelector((harii) => harii.Search);
const singleproduct=useSelector((hloo)=> hloo.Single);

const history = useHistory();
const dispatch=useDispatch()
const itemsPerPage = 8; 

useEffect(()=>{
const fetchData = async () => {
    try {
      const {data}= await axios.get('https://fakestoreapi.com/products');
      setAllproducts(data)
      setSearchProductdata(data)
      
      // console.log(data,"setalldata test");
    } catch (error) {
      console.error('Error fetching data', error);
    }
};
fetchData()
},[]);


const buynow=(item)=>{
  dispatch(Setsingle(item));
  history.push("/single")

}


// useEffect(() => {
//   const categoryFilter = allproducts.filter((item) => item.category === getcategory);
 
//   if (getcategory && categoryFilter.length > 0) {
//     setSearchProductdata(categoryFilter);
//   } else {
//     setSearchProductdata(allproducts);
//   }
// }, [getcategory, allproducts]);
console.log(selectedCategory,"Singlredsljhdk")

useEffect(() => {
  if (searchQuery) {
    // If there is a search query, filter the products based on the search query
    const filteredData = allproducts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchProductdata(filteredData);
  // } else if (selectedCategory) { // Fix the syntax here
  //   const categoryFilter = allproducts.filter((item) =>
  //    item.category === searchQuery);
  //    setSearchProductdata(categoryFilter );
  //    console.log(   categoryFilter,"cahhh" )
  } else {
    setSearchProductdata(allproducts);
  }
}, [searchQuery, selectedCategory, allproducts]);

console.log(searchQuery,"search")
  // useEffect(() => {
  //   if (searchQuery) {
  //     // If there is a search query, filter the products based on the search query
  //     const filteredData = allproducts.filter((item) =>
  //       item.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setSearchProductdata(filteredData);
  //   } 
  //   else if  
  //     (getcategory) {
  //     const categoryFilter = allproducts.filter((item) =>
  //      item.category=== getcategory);
  //     setSearchProductdata(categoryFilter); // Otherwise, fetch all products
  //      } else {
  //       setSearchProductdata(allproducts);
  //     }
  //   }
  // }, [searchQuery, getcategory, allproducts]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchProductdata.slice(indexOfFirstItem, indexOfLastItem);
 
  const totalPages = Math.ceil(searchProductdata.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };



  return (
   

    <div className="">
      <>
    <div className="mycard">

       {currentItems.length > 0 ? (
        currentItems.map((item, index) => (
        <Card className="mycard2 mx-2 my-3" key={index} style={{ width: '18rem' ,height:"30rem"}}>
          <Card.Img className='cardimages' variant="top" style={{ width: '7rem',height:"7rem",justifyContent: "center",marginLeft:"30%"}} src={item.image} />
          <Card.Body>
            <Card.Title className=' text-center '>{item.title}</Card.Title>
            <Card.Text style={{fontSize:"7px"}}>  <p>{item.description} </p> </Card.Text>    
            <Card.Text className=' text-center ' > Rating : {item.rating.rate}</Card.Text>
            <Card.Text  className=' text-center '><h3 style={{ color:'GrayText'}}><span style={{color:"red",fontSize:"20px",marginBottom:"10px"}}>&#8377;</span> {item.price}</h3></Card.Text>
            <Button style={{marginLeft:"30%"}} variant="success"  onClick={() => buynow(item)}>Buy Now</Button> 
          </Card.Body>
        </Card>
     ) )
     ):(
      <div>loading...</div>
     )}
    </div>
    {searchProductdata.length > itemsPerPage && (
        <div  className="row my-4">
          <div className="col-4"></div>
          <div className="col-4 pagination"  >
             
             <Button  style={{marginLeft:"20%"}} className='bg-dark ml-3 text-primary' disabled={currentPage === 1} onClick={handlePrevPage}>
                <i className="bi bi-arrow-left "></i></Button> 

               <h5 style={{marginLeft:"18%"}}>{currentPage} </h5> 
             <Button style={{marginLeft:"25%"}} className=' text-primary bg-dark ' disabled={currentPage === totalPages} onClick={handleNextPage}>
                <i className="bi bi-arrow-right "></i><spam></spam> </Button>
          </div>
          <div className='col-4'></div>
        
         
        </div>
      )}
      </>
  </div>

    
  
  );
     }
export default ProductList
