import React from "react";
import Footer from "../../footer";
import Header from "../../header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AppContextProvider from "../../../provider/AppContextProvider";
import { margin } from "@mui/system";

const Csf = () => {
  const { values, setValues } = React.useContext(AppContextProvider);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
      <Header />
      <div>
        <h1 className="text-center">CSF Firewall Port generation tool</h1>
        <p className="text-center">
          Fill in the IP address and port to open a specific port in CSF
          Firewall for a specific IP. All commands need done as Root
        </p>
        <div>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <label style={{width: "340px" ,  padding: '7px 17px'}}>Port</label>
            <div style={{ display: "flex", flexDirection: "column", color: "#6c757d", alignItems: "center",width: "310px",textAlign: "center" }}>
            <TextField
              id="outlined-multiline-flexible"
              value={values.port}
              onChange={handleInputChange}
              name="port"
              placeholder="5.7.8"
              sx={{ width: "310px", }}
            />
            <span>Port to open in firewall.</span>
            </div>
          </Box>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <label style={{width: "340px" , padding: '7px 17px'}}>IP Address</label>
            <div style={{ display: "flex", flexDirection: "column", color: "#6c757d", alignItems: "center",width: "310px" ,textAlign: "center"}}>
            <TextField
              id="outlined-multiline-flexible"
              value={values.ipAddress}
              onChange={handleInputChange}
              name="ipAddress"
              placeholder="1.2.3.4"
              sx={{ width: "310px", }}
            />
            <span>IP for destination/source opened port in firewall.</span>
            </div>
          </Box>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <label style={{width: "340px" , padding: '7px 17px'}}>cPanel Username for Outbound port</label>
            <div style={{ display: "flex", flexDirection: "column", color: "#6c757d", alignItems: "center",width: "310px",textAlign: "center" }}>
            <TextField
              id="outlined-multiline-flexible"
              value={values.username}
              onChange={handleInputChange}
              name="username"
              placeholder="username"
              sx={{ width: "310px", }}
            />
            <span>Port to open in firewall.</span>
            </div>
          </Box>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <label style={{width: "340px" , fontSize: 16, padding: '7px 17px'}}>CSF TCP port rules</label>
            <div style={{ display: "flex", flexDirection: "column", color: "#6c757d", alignItems: "center",width: "310px",textAlign: "center"  }}>
            <TextField
              id="outlined-multiline-flexible"
              value={values.ticketid}
              onChange={handleInputChange}
              name="ticketid"
              placeholder="5.7.8"
              sx={{ width: "310px", }}
            />
            <span>Comment/TicketID for rule. Format: # Client ID: $CLIENTID, Service ID: $SERVICEID, Reason: REASON - $LDAPUSER.</span>
            </div>
          </Box>
          <button style={{ display: "flex", marginLeft:"1250px", marginBottom:"20px" }}type='submit' className='btn'>Submit</button>
        </div>
        <p className="text-center">
        CSF TCP port rules
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Csf;
