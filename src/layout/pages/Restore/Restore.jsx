import React from 'react'
import Footer from '../../footer'
import Header from '../../header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import AppContextProvider from '../../../provider/AppContextProvider'


const Restore = () => {
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

  const AccordionData = [
    {
      id: 1,
      commands: [
        {
          details: `Check for available RsyncRestore backups for a cPanel account`,
          command: `sudo ls -ld /app/backups/*/home/${values.username === '' ? 'Username_not_provided_in_form' : values.username}`, 
        },
        {
          details: `Check for available RsyncRestore backups for a database. Find missing backups for database. `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Restore cPanel Database via RsyncRestore with overwrite `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Restore cPanel Database with RsyncRestore to a file in the Username_not_provided_in_form's home directory `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Force Restore with Repair a cPanel Database with RsyncRestore to a file in root. Great for when tables are missing or showing errors. `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Force Restore with Repair a cPanel Database with RsyncRestore to a file in root and also overwrite the database. `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Restore a cPanel User's home directory via RsyncRestore `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Fix cPanel users's perms and ownership`,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: ` `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
      ]

    }
  ]

  const Data = [
    {
      id: 1,
      commands: [
        {
          details: `Check for available RsyncRestore backups for a Plesk domain`,
          command: `sudo ls -ld /app/backups/*/home/${values.username === '' ? 'Username_not_provided_in_form' : values.username}`, 
        },
        {
          details: `Restore Plesk Database via RsyncRestore with overwrite`,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Backup a Plesk Domain's httpdocs folder before restore`,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Restore a Plesk Domain's httpdocs folder via RsyncRestore`,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
        {
          details: `Correct Plesk users permissions after restore from root to Username_not_provided_in_form `,
          command: `sudo ls -ld /app/backups/*/var/lib/mysql/DatabaseName_not_provided_in_form`, 
        },
      ]

    }
  ]



  return (
    <React.Fragment>
        <Header/>
        <div >
        <h1 className="text-center" >Wizard Assistant RsyncRestore Tool</h1>
            <p className="text-center">
            Fill in the Domain(Plesk), Username(Plesk & cPanel), and Date to generate RsyncRestore commands
            </p>
        <Box
        component="form"
        noValidate
        autoComplete="off" 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: 'auto' }}>
        <div>
        <label>Domain:</label>
        <TextField
          id="outlined-multiline-flexible"
          // label="Domain:"
          multiline
          maxRows={4}
          // value={values.domain}
          // onChange={handleInputChange}
          name='domain'
          placeholder="example.com"
          sx={{width: '845px',  marginTop: '10px', marginBottom: '10px'}}
        />
        </div>
        <div>
        <label>Username</label>
        <TextField
          id="outlined-multiline-flexible"
          // label="Url to parse Domain from:"
          multiline
          maxRows={4}
          // value={values.urlToParse}
          // onChange={handleInputChange}
          name='username'
          placeholder="someusername"
          sx={{width: '845px',  marginTop: '10px', marginBottom: '10px'}}
        />
        </div>
        <div>
        <label>Database name</label>
        <TextField
          id="outlined-multiline-flexible"
          // label="Domain:"
          multiline
          maxRows={4}
          // value={values.domain}
          // onChange={handleInputChange}
          name='domain'
          placeholder="example.com"
          sx={{width: '845px',  marginTop: '10px', marginBottom: '10px'}}
        />
        </div>
        <div>
        <label>Date</label>
        <TextField
        id="date"
        type="date"
          // value={values.urlToParse}
          // onChange={handleInputChange}
          name='date'
          sx={{width: '845px', marginTop: '10px', marginBottom: '10px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button type='submit' className='btn' style={{marginLeft: '0px'}}>Submit</button>
        </div>
        </Box>
        <Box 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 'auto' }}
        >
          {AccordionData.map((item) => (
            <div>
        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal', }}>
            
            {item.commands === undefined  ? null : 
            item.commands.map((command) => (  
            <div >
             {command.details}
             <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
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

        <hr/>
        <Box 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 'auto' }}
        >
          {Data.map((item) => (
            <div>
        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal', }}>
            
            {item.commands === undefined  ? null : 
            item.commands.map((command) => (  
            <div >
             {command.details}
             <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
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

        
        </div>
        <Footer/>
</React.Fragment>
  )
}

export default Restore