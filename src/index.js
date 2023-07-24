import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Components/Product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
  <React.StrictMode>
   
    <Provider store={store}>
    <Router>


    <Header/>
    
   <Switch>
    <Route path="/single" component={Product}/>
     
    
   
    <ProductList/>
    </Switch>
    <Route exact path="/" component={App} />
    <Footer/>

  </Router>
    </Provider>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
