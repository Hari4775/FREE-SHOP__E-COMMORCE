import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Button,Card} from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
      <div className='bg-black mt-2'>
      {/* testtt */}
      <div class="d-flex flex-column h-100">

<section class="hero text-white py-1 flex-grow-1">
    <div class="container py-2">
        <div class="row">
            <div class="col-lg-6">
                <p class="fst-italic text-muted"></p>
            </div>
        </div>
    </div>
</section>

<footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
                <h1  className='text-warning'>Free Shopppyy</h1>
                <p class="text-white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p className="text-white">&copy; Copyrights. All rights reserved.  </p>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
               
                <form action="#">
                    <div class="input-group mb-3">
                    <h3 className='text-warning'><i class="bi bi-facebook"></i></h3> 
                    <p>..</p>
                    <h3 className='text-warning'><i class="bi bi-whatsapp"></i></h3>
                    <p>..</p>
                    <h3 className='text-warning'> <i class="bi bi-instagram"></i></h3>
                    </div>
                </form>
            </div>
        </div>
    </div>
</footer>
</div>
      
    </div>
    </div>
  )
}

export default Footer
