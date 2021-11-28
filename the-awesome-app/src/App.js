import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import ListProducts from './components/ListProducts';
import Login from './components/Login';
import UseCallbackDemo from './components/UseCallbackDemo';
import GadgetShop from './components/GadgetShop';
import ProtectedRoute from './components/ProtectedRoute';

import ViewCart from './components/ViewCart';
import AppHeader from './components/Header';
import Responsive from './components/Responsive';

const ListProducts = React.lazy(() => import('./components/ListProducts'));

function App() {

  

  return (
    <Router>
      <div>

        <AppHeader/>

        <section>
       
          <Route path="/home" render={() => <Hello message="react"/>}/>
          <Route path="/counter" component={Counter}/>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/products" component={ListProducts}/>
          </Suspense>

         
          <Route path="/login" component={Login}/>
          <Route path="/usecallback" component={UseCallbackDemo}/>
          {/* <Route path="/gadgets" component={GadgetShop}/> */}
          <ProtectedRoute path="/gadgets" component={GadgetShop}/>
          <ProtectedRoute path="/cart" component={ViewCart}/>
          <Route path="/responsive" component={Responsive}/>
        </section>
      </div>
    </Router>

  );
}

export default App;
