import React from 'react'
import Footer from '../../footer'
import Header from '../../header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppContextProvider from '../../../provider/AppContextProvider'

const Lookup = () => {


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
            Fill in the IP address to lookup
            </p>

          <Box 
          component="form"
          noValidate
          autoComplete="off"
          style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
          <label style={{marginRight: '10px'}}>IP address</label> 
          <TextField
          id="outlined-multiline-flexible"
          value={values.ipAddress}
          onChange={handleInputChange}
          name='ipAddress'
          placeholder="1.2.3.4"
          sx={{width: 'auto', }}
          />
        <button type='submit' className='btn'>Submit</button>
        </Box>
        <div style={{display: 'flex',justifyContent: 'center', maxWidth: '720px', margin: '16px auto'}}>
          <table >
            <tbody>
              <tr></tr>
              <tr>
                <td>IP</td>
                <td></td>
              </tr>
              <tr>
                <td>Hostname</td>
                <td></td>
              </tr>
              <tr>
                <td>ASN</td>
                <td></td>
              </tr>
              <tr>
                <td>ISP</td>
                <td></td>
              </tr>
              <tr>
                <td>City</td>
                <td></td>
              </tr>
              <tr>
                <td>Zip</td>
                <td></td>
              </tr>
              <tr>
                <td>Region Code</td>
                <td></td>
              </tr>
              <tr>
                <td>Region Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Country Code</td>
                <td></td>
              </tr>
              <tr>
                <td>Country Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Continent Name</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Lookup
