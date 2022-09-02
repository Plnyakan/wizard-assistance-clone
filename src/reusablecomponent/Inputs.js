import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import AppContextProvider from '../provider/AppContextProvider'

export default function MultilineTextFields() {

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

  console.log(values)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, display: 'flex', flexDirection: 'column',},
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Domain:"
          multiline
          maxRows={4}
          value={values.domain}
          onChange={handleInputChange}
          name='domain'
          placeholder="example.com"
          sx={{width: '520px'}}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Url to parse Domain from:"
          multiline
          maxRows={4}
          value={values.urlToParse}
          onChange={handleInputChange}
          name='urlToParse'
          placeholder="https://example.com"
          sx={{width: '520px'}}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', marginTop: '10px' }}>
      <TextField
          id="outlined-multiline-flexible"
          label="Email:"
          multiline
          maxRows={4}
          value={values.email}
          onChange={handleInputChange}
          name='email'
          placeholder="bob@example.com"
          sx={{width: '520px'}}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email2 Optional:"
          multiline
          maxRows={4}
          value={values.email2}
          onChange={handleInputChange}
          name='email2'
          placeholder="alice@example.com"
          sx={{width: '520px'}}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', marginTop: '10px',width: '100%' }}>
      <TextField
          id="outlined-multiline-flexible"
          label="Client IP address"
          multiline
          maxRows={4}
          value={values.ipAddress}
          onChange={handleInputChange}
          name='ipAddress'
          placeholder="1.2.3.4"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          value={values.username}
          onChange={handleInputChange}
          name='username'
          placeholder="someusername"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', marginTop: '10px' }}>
      <TextField
        id="date"
        label="Date for Atop/Domlogs Search"
        type="date"
        value={values.date}
        onChange={handleInputChange}
        name='date'
          sx={{width: '520px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Time for Atop/Domlogs Search"
          type="time"
          value={values.time}
          onChange={handleInputChange}
          name='time'
          sx={{width: '520px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Link to="/result">
      <button type='submit' className='btn'>Submit</button>
      </Link>
    </Box>
  );
}
