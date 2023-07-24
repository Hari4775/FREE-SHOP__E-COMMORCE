import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux'
import {setSearchQuery} from "../Redux/slice"
import { Catageryslice } from '../Redux/slice';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch=useDispatch()
    const setsearch=(value)=>{dispatch(setSearchQuery(value))}

    const handleSearch = () => {
        dispatch(setSearchQuery(searchTerm)); // Dispatch the action to update the search query
      };
      console.log(searchTerm,"query")
    
    const handleCategoryClick = (item) => {
    dispatch( Catageryslice(item))};


  return (
    <div className=''>

<Navbar expand="lg" style={{backgroundColor:"black"}}
 >              
      <Container fluid >
        <Navbar.Brand href="/"><img src="https://files.sikayetvar.com/lg/cmp/18/185445.png?1613555997" style={{height:"50px",width:"250px"}} ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link onClick={() => handleCategoryClick('jewelery')}>jewelery</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick("men's clothing")} >men's clothing</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick("electronics")} >electronics</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick("women's clothing")} >"women's clothing"</Nav.Link>
           */}
           </Nav>
           <div className='row mt-3'>
            <div className='col-0'></div>
           <div className='col-10 '>
           
               <Form className="d-flex">
                 <Form.Control style={{width:"800px",marginLeft:"50%",marginRight:"0%"}} type="search"
                  placeholder="Search" onChange={(e)=>setsearch(e.target.value)}  aria-label="Search"/>
                 <button style={{marginRight:"40%",backgroundColor:"orange"}} variant="outline-primary"onClick={handleSearch} ><i class="bi bi-search"></i>
                 </button>
              </Form>
              
        </div>
        <div className='col-1 '>
            <h4  className="text-warning " ><i class="bi bi-person-circle"></i></h4>
        </div>

        <div className='col-1 '>
             <h4 className='text-warning'><i class="bi bi-cart3"></i></h4>
        </div>
          
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}

export default Header
