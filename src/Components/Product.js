import React from 'react'
import {Button,Card} from 'react-bootstrap';



import { useSelector } from 'react-redux'

const Product = () => {

  const singleproduct=useSelector((hello)=>hello.Single)
  console.log("jdjd",singleproduct)
    return (
    <div>
       <>

       <div className='container '>
          <div className='row '>
            <div className='col-2'></div>
            <div className='col-4 '>
               <Card className="mycard2 mx-2 my-3"style={{ maxWidth: '18rem' }}>
                 <Card.Img variant="top" src={singleproduct.image} />
                  <Card.Body>                 
                 </Card.Body>
               </Card>
            </div>
            <div className='col-4'>
                <div className='row my-5'>
                 <h3>{singleproduct.title}</h3>
                </div>
                <div className='row'>
                  <h6> Rating : {singleproduct.rating.rate}</h6>
                </div>
                <div className='row my-1'>
                    <p>{singleproduct.description}</p>
                </div>
                <div className='row my-1'><h1><span style={{color:"red",fontSize:"20px",marginBottom:"10px"}}>&#8377;</span>{singleproduct.price}</h1></div>
                <div className='row my-1'><Button>ORDER NOW</Button></div>

            </div>

            <div className='col-2'></div>

          </div>

       </div>
    

        </>
    </div>
  )
}

export default Product
