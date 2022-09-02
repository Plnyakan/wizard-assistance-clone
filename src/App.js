import React, {useState} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import AppContextProvider from "./provider/AppContextProvider";


import {Step1} from './Step1'
import {Result} from './Result'
import Andvanced from "./layout/pages/andvanced/Andvanced";
import Csf from "./layout/pages/csf/Csf";
import Dns from "./layout/pages/dns/dns";
import Restore from "./layout/pages/Restore/Restore";
import Lookup from "./layout/pages/lookup/IpLookup";

const initialValues = {
  domain: "",
  urlToParse: "",
  email: "",
  email2: "",
  ipAddress: "",
  username: "",
  date: "",
  time: "",
  port: "",
  ticketid: "",
};


function App() {
  const [values, setValues] = useState(initialValues);



  return (
    <AppContextProvider.Provider
    value={{
      values, 
      setValues
    }}
    >
    <Router>
      <Route exact path="/" component={Step1}/>
      <Route path="/result" component={Result}/>
      <Route path="/dns" component={Dns}/>
      <Route path="/restore" component={Restore}/>
      <Route path="/lookup" component={Lookup}/>
      <Route path="/advanced" component={Andvanced}/>
      <Route path="/csf" component={Csf}/>
    </Router>
    
    </AppContextProvider.Provider>
  );
}

export default App;
