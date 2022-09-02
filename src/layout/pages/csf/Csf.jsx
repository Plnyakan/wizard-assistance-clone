import React from "react";
import Footer from "../../footer";
import Header from "../../header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AppContextProvider from "../../../provider/AppContextProvider";
import Typography from '@mui/material/Typography'

const Csf = () => {
  const { values, setValues } = React.useContext(AppContextProvider);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Data = [
    {
      id: 1,
      commands: [
        {
          details: `Allow incoming traffic from ${values.ipAddress === '' ? '105.186.161.181' : values.ipAddress} and TCP port:${values.port === '' ? '587' : values.port}`,
          command: `echo 'tcp|in|d=587|d=${values.port === '' ? '105.186.161.181' :values.port + '#' + values.ticketid}' >> /etc/csf/csf.allow && sudo csf -r;`, 
        },
        {
          details: `Allow outgoing traffic via TCP port:${values.port === '' ? '587' : values.port} to ${values.ipAddress === '' ? '105.186.161.181' : values.ipAddress}`,
          command: `echo 'tcp|out|d=587|u=${values.username === '' ? 'wizardassist' :values.username + '#' + values.ticketid}' >> /etc/csf/csf.allow && sudo csf -r;`, 
        }
      ]

    }
  ]


  const Data2 = [
    {
      id: 1,
      commands: [
        {
          details: `Allow incoming traffic from ${values.ipAddress === '' ? '105.186.161.181' : values.ipAddress} and UDP port:${values.port === '' ? '587' : values.port}`,
          command: `echo 'udp|in|d=587|d=${values.port === '' ? '105.186.161.181' :values.port + '#' + values.ticketid}' >> /etc/csf/csf.allow && sudo csf -r;`, 
        },
        {
          details: `Allow outgoing traffic via UDP port:${values.port === '' ? '587' : values.port} to ${values.ipAddress === '' ? '105.186.161.181' : values.ipAddress}`,
          command: `echo 'udp|out|d=587|u=${values.username === '' ? 'wizardassist' :values.username + '#' + values.ticketid}' >> /etc/csf/csf.allow && sudo csf -r;`, 
        }
      ]

    }
  ]
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
              placeholder="ABC-123-45678"
              sx={{ width: "310px", }}
            />
            <span>Comment/TicketID for rule. Format: # Client ID: $CLIENTID, Service ID: $SERVICEID, Reason: REASON - $LDAPUSER.</span>
            </div>
          </Box>
          <button style={{ display: "flex", marginLeft:"1250px", marginBottom:"20px" }}type='submit' className='btn'>Submit</button>
        </div>
        <div style={{width: '1140px', margin : 'auto' }}>
        <p className="text-center">
        CSF TCP port rules
        </p>
        <Box 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 'auto' }}
        >
          {Data.map((item) => (
            <div>
        <Typography sx={{textAlign: 'center', fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal',width: '100%', }}>
            
            {item.commands === undefined  ? null : 
            item.commands.map((command) => (  
            <div >
             {command.details}
             <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px', width: '950px'}}>
            <input className='bash' type="text" value={`${command.command}`} id='LinuxTopUser'/>
            <button onClick={() =>  navigator.clipboard.writeText(command.command)} className="btn btn-outline-primary" data-clipboard-target="#LinuxTopUser">
              <img src='https://wizardassistant.app/images/clippy.png' width="13" alt='copy' />
            </button>
            </div>
            </div>
            ))}
          </Typography>
          </div>
          ))}
        </Box>

        <p className="text-center">
        CSF UDP port rules
        </p>
        <Box 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}
        >
          {Data.map((item) => (
            <div>
        <Typography sx={{textAlign: 'center',  fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal'}}>
            
            {item.commands === undefined  ? null : 
            item.commands.map((command) => (  
            <div >
             {command.details}
             <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px',width: '950px'}}>
            <input className='bash' type="text" value={`${command.command}`} id='LinuxTopUser'/>
            <button onClick={() =>  navigator.clipboard.writeText(command.command)} className="btn btn-outline-primary" data-clipboard-target="#LinuxTopUser">
              <img src='https://wizardassistant.app/images/clippy.png' width="13" alt='copy' />
            </button>
            </div>
            </div>
            ))}
          </Typography>

          </div>
          ))}
          <div style={{textAlign: 'center', width: '933px'}}>
            <p style={{margin: '0px'}}>If converting rules from APF /etc/apf/allow_hosts.rules see below reference for difference. Change the ":" to "|" on whole rule set and append to /etc/csf/csf.allow</p>
            <p style={{margin: '0px'}}>CSF format: tcp|in|d=587|s=192.168.1.0</p>
            <p style={{margin: '0px'}}>APF format: tcp:in:d=587:s=192.168.1.0</p>
          </div>
        </Box>
        </div>


      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Csf;
