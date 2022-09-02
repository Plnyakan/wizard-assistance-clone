import React from 'react'
import Footer from '../../footer'
import Header from '../../header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AppContextProvider from '../../../provider/AppContextProvider'


const Dns = () => {

  const { 
    values, setValues
  } 
  = React.useContext(AppContextProvider)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
        <Header/>
        <div>
        <h1 className="text-center" >Wizard Assistant Toolkit</h1>
            <p className="text-center">
            Fill in the URL or Domain for DNS lookup
            </p>
            <Box 
          component="form"
          noValidate
          autoComplete="off"
          style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
          <label style={{marginRight: '10px'}}>Url: </label> 
          <TextField
          id="outlined-multiline-flexible"
          value={values.urlToParse}
          onChange={handleInputChange}
          name='urlToParse'
          placeholder="https://example.com"
          sx={{width: 'auto', }}
          />
          <label style={{marginRight: '10px', marginLeft: '10px'}}> Domain:</label> 
          <TextField
          id="outlined-multiline-flexible"
          value={values.domain}
          onChange={handleInputChange}
          name='domain'
          placeholder="example.com"
          sx={{width: 'auto', }}
          />
        <button type='submit' className='btn'>Submit</button>
        </Box>

        <div style={{maxWidth: '960px', margin: '10px auto'}}>
    <Accordion sx={{ backgroundColor: '#eee', border: 'none',color:'#444' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: 'white',
            backgroundColor: '#717A83',
            borderRadius: '16px',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
          }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: '20px', color: '#444', textAlign: 'center', display: 'flex', margin: 'auto' }}>DNS Diagnostics</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{backgroundColor: '#fff'}}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal', }}>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Dns