import React from 'react'
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import CustomerListPage from './components/pages/CustomerListPage';
import CustomerDetailPage from './components/pages/CustomerDetailPage';
import CustomerCreatePage from './components/pages/CustomerCreatePage';
import CustomerUpdatePage from './components/pages/CustomerUpdatePage';
import AboutPage from './components/pages/AboutPage';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/login" component={SignUp} />

        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>

        <Route path="/customers/:id/edit" component={CustomerUpdatePage}>
        </Route>

        <Route path="/customers/:id" component={CustomerDetailPage} />

        <Route path="/customers">
          <CustomerListPage />
        </Route>

        <Route path="/about" exact component={AboutPage} />
        <Route path="/" exact component={HeroSection} />
      </Switch>
    </>
  );
}

export default App;
