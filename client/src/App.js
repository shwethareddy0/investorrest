
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CompareProperty from "./pages/CompareProperty";
import MyHomes from "./pages/MyHomes";
import SearchCity from "./pages/SearchCity";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/compare" component={CompareProperty} />
          <Route exact path="/myhomes" component={MyHomes} />
          <Route exact path="/search" component={SearchCity} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
