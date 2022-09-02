import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Footer from '../../footer'
import Header from '../../header'
import '../../../App.css';

const Andvanced = () => {

    const AccordionData = [
        {
          id: 1,
          summary: 'Most Used',
          commands: [
            {
              details: `Generate WHM root session on Core/Root cPanel server`,
              command: `whmapi1 create_user_session user=root service=whostmgrd locale=en | grep 2087`, 
            },]

        },
        {
          id: 2,
          summary: 'General',
          commands: [{
            details: `See current memory usage dump`,
            command: `ps -eo size,pid,user,command | awk '{ hr=$1/1024 ; printf("%13.6f Mb ",hr) } { for ( x=4 ; x<=NF ; x++ ) { printf("%s ",$x) } print "" }' | sort -nk1`, 
            },
            {
              details: `See current memory usage nice `,
              command: `echo [PID]  [MEM]  [PATH] &&  ps aux | awk '{print $2, $4, $11}' | sort -k2rn | head -n 20`, 
            },
            {
              details: `See current cpu usage dump `,
              command: `ps -eo pcpu,pid,user,args | sort -k 1 -r | head -20`, 
            },
            {
              details: `Sar See Sar memory usage for today`,
              command: `sar -r`, 
            },
            {
              details: `See Sar memory usage for yesterday`,
              command: `sar -r -f /var/log/sa/sa$(date +%d -d yesterday)`, 
            },
            {
              details: `See Sar Top hits for today`,
              command: `sar -q | sort -rnk4 | head -n5`, 
            },
            {
              details: `See Sar Top hits for yesterday `,
              command: `sar -q -f /var/log/sa/sa$(date +%d -d yesterday) | sort -rnk4 | head -n5`, 
            },
          ]  
        },
        {
          id: 3,
          summary: 'cPanel specific stuff',
          commands: [
            {
              details: `Check VPS/Dedicated Host information`,
              command: `sudo cat /etc/wwwacct.conf | grep "HOST\|NS"`, 
            },]

        },
        {
          id: 4,
          summary: 'CloudLinux',
          commands: [
            {
              details: `ResetCageFS For all Users`,
              command: `cagefsctl --force-update; cagefsctl -M`, 
            },
            {
            details: `LveStats For all Users by faults for 1 day`,
            command: `lveinfo --period=1d --by-fault=mep --display-username`, 
              },
        ]
        },
        {
          id: 5,
          summary: 'Network and Connections Check',
          commands: [
            {
              details: `See Current Connections by IP`,
              command: `netstat -tun | tail -n +3 | awk '{print $5}' | cut -d: -f1 | grep -v 127.0.0.1 | sort | uniq -c | sort -n | tail | tee ips; > ipswhoislist; for i in $(cat ips); do whois -h whois.cymru.com " -c -p $i" >> ipswhoislist; done; echo ""; echo "Doing IP Lookups" ; awk '!x[$0]++' ipswhoislist`, 
            },]

        },
        {
          id: 6,
          summary: 'Firewall',
          commands: [
            {
                details: `FirewallD(Centos7) commands <br>FirewallD status`,
                command: `firewall-cmd --state`, 
              },
        ]

        },
        {
          id: 7,
          summary: 'Email',
          commands: [
            {
              details: `FirewallD(Centos7) commands`,
            },
            {
                details: `FirewallD status`,
                command: `firewall-cmd --state`, 
              },
        ]

        },
        {
          id: 8,
          summary: 'Apache',
          commands: [
            {
              details: `Check memcached status on server`,
              command: `sudo ps aux | grep -e [^grep]memcached`, 
            },]

        },
        {
          id: 9,
          summary: 'MySQL',
          commands: [
            {
              details: `Linux find MySQL Error Log`,
              command: `sudo grep log-error /etc/my.cnf | sed 's/log-error=//g' | sed 's/log-error = //g' | sed 's/"//g'`, 
            },
          ] 
        },
        {
          id: 10,
          summary: 'Memcached',
          commands: [
            {
              details: `Check memcached status on server`,
              command: `sudo ps aux | grep -e [^grep]memcached`, 
            },]

        },
      ]
    
  return (
    <React.Fragment>
        <Header/>
        <div>
            <h1 className="text-center" >Wizard Assistant Toolkit</h1>
            <p className="text-center">
            Some common commands to check advanced issues
            </p>
    {AccordionData.map((item) => (
    <div style={{maxWidth: '960px', margin: 'auto'}}>
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
          <Typography sx={{ fontSize: '20px', color: '#444', textAlign: 'center', display: 'flex', margin: 'auto' }}>{item.summary}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{backgroundColor: '#fff'}}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '28px', textTransform: 'capitalize', fontFamily: 'Open Sans', fontStyle: 'normal', }}>
            
            {item.commands === undefined  ? null : 
            item.commands.map((command) => (  
            <div >
             {command.details}
             <div style={{display: 'flex', flexDirection: 'row'}}>
            <input className='bash' type="text" value={`${command.command}`} id='LinuxTopUser'/>
            <button onClick={() =>  navigator.clipboard.writeText(command.command)} className="btn btn-outline-primary" data-clipboard-target="#LinuxTopUser">
              <img src='https://wizardassistant.app/images/clippy.png' width="13" alt='copy' />
            </button>
            </div>
            </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      ))}
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Andvanced
