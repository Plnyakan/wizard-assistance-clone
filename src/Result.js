import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AppContextProvider from '../src/provider/AppContextProvider'
import Footer from './layout/footer'
import Header from './layout/header'
import './App.css';

export const Result = () => {
  const { 
    values, setValues
  } 
  = React.useContext(AppContextProvider)

  const AccordionData = [
    {
      id: 1,
      summary: 'DNS Information',
      contents: [{
        details: `Search login logs for ${ values.email} Shows IMAP, POP login attempts, transactions, fatal errors and spam scoring.`,
    }] 
    },
    {
      id: 2,
      summary: 'Email Diagnostics',
      commands: [{
        details: `Search login logs for ${values.email === '' ? 'Email_not_provided_in_form' : values.email} Shows IMAP, POP login attempts, transactions, fatal errors and spam scoring.`,
        command: `sudo grep -is ${values.email === '' ? 'Email_not_provided_in_form' : values.email} /var/log/maillog`, 
        },
        {
          details: `Search login logs for ${values.domain === '' ? 'Email_not_provided_in_form' : values.domain} Shows IMAP, POP login attempts, transactions, fatal errors and spam scoring. `,
          command: `sudo grep -is ${values.domain === '' ? 'Domain_not_provided_in_form' : values.domain} /var/log/maillog`, 
        },
        {
          details: `Search login logs for ${values.email === '' ? 'Email_not_provided_in_form' : values.email} failed logins. `,
          command: `sudo grep -is ${values.email === '' ? 'Email_not_provided_in_form' : values.email} /var/log/maillog | grep failed`, 
        },
        {
          details: `Search login logs for ${values.email === '' ? 'Email_not_provided_in_form' : values.email} failed logins and find unique IP's. `,
          command: `sudo grep -is ${values.email === '' ? 'Email_not_provided_in_form' : values.email} /var/log/maillog | grep failed | grep -Eo "rip=(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])" | sed 's/rip=//g' | sort -u | tee ips; for i in $(cat ips); do whois -h whois.cymru.com " -c -p $i" >> ipswhoislist; done; echo ""; echo "Doing IP Lookups" ; awk '!x[$0]++' ipswhoislist |cut -d"|" -f 2,4,5;`, 
        },
        {
          details: `Search by IP to find which accounts are failing from ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress}`,
          command: `sudo grep -is ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} /var/log/maillog | grep failed`, 
        },
        {
          details: `Search by IP to find which accounts are failing from ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' :values.ipAddress} sorted unique accounts`,
          command: `sudo grep -is ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} /var/log/maillog | grep failed | grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" | sort -u`, 
        },
        {
          details: `Search by IP to find which accounts are successfull from ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} sorted unique accounts `,
          command: `sudo grep -is ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} /var/log/maillog |  grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" | sort -u`, 
        },
        {
          details: `Search by IP to find which accounts are failing from ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} without successful logins. Find who triggered firewall `,
          command: `echo "Unique Failed Email accounts"; sudo grep ${values.ipAddress === '' ? 'ClientIP_not_provided_in_form' : values.ipAddress} /var/log/maillog | grep failed | grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" | sort -u | tee failed_email_accounts; echo ""; echo "Unique Successful Email accounts"; sudo grep ClientIP_not_provided_in_form /var/log/maillog | grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" | sort -u | tee successful_email_accounts; echo ""; echo "Unique Email accounts who failed without successful logins. Probably culprit of the firewall ban"; comm -23 failed_email_accounts successful_email_accounts`, 
        },
      ]  
    },
    {
      id: 3,
      summary: 'Firewall Checks',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 4,
      summary: 'Files and Permissions Tricks',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 5,
      summary: 'Managing/Searching Processes',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 6,
      summary: 'Wordpress CLI Tools',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 7,
      summary: 'Magento CLI Tools',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 8,
      summary: 'cPanel User login, session, addon domains, accounting, and access logs',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 9,
      summary: 'Suspensions',
      commands: [
        {
          details: `Find Suspension reason for cPanel`,
          command: `sudo whmapi1 listsuspended | grep -B5 ${values.username === '' ? 'Username_not_provided_in_form' : values.username}||sudo cat /var/cpanel/suspended/${values.username === '' ? 'Username_not_provided_in_form' : values.username}`, 
        },
        {
          details: `Check DatabaseGovernor Log`,
          command: `sudo grep -is ${values.username === '' ? 'Username_not_provided_in_form' : values.username} /var/log/dbgovernor-restrict.log`, 
        },
        {
          details: `UnSuspend account `,
          command: `sudo /scripts/unsuspendacct ${values.username === '' ? 'Username_not_provided_in_form' : values.username}`, 
        },
        {
          details: `Suspend account`,
          command: `sudo /scripts/suspendacct ${values.username === '' ? 'Username_not_provided_in_form' : values.username}`, 
        }
      ] 
    },
    {
      id: 10,
      summary: 'cPanel Apache Logs',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 11,
      summary: 'Specific Domlog Searches By cPanel User',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 12,
      summary: 'Apache Accesslog Searches',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    },
    {
      id: 13,
      summary: 'Global Domlog Searches for VPS/Dedicateds',
      details: 'A Payment Gateway is a mechanism used for collecting, authorising and storing card data on behalf of merchants.Typically it is connected to a website via an Ecommerce shopping cart or payment module (e.g. WooCommerce, OpenCart, Shopify). The purchaser enters their credit or debit card details encrypted into a secure PayPage on the Payment Service Provider’s servers who in turn sends the data through to the card clearing bank for authorisation.'
    }
  ]



  
  return (
    <>
      <Header/>
      <h1 className="text-center" >Wizard Assistant Toolkit</h1>
      <p className="text-center">
      This tool allows you to rapidly debug cPanel/Cyberpanel account issues and review and check for common DNS issues. 
      Fill in any known combination of  inputs.
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

      <Footer/>
    </>
  )
}