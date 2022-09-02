import React from 'react'
import './App.css';
import MultilineTextFields from './reusablecomponent/Inputs'
import AppContextProvider from '../src/provider/AppContextProvider'
import Header from './layout/header';
// import { useHistory } from 'react-router-dom'

export const Step1 = () => {

  const { selectedBusiness, selectedTeamId } =
  React.useContext(AppContextProvider)

  return (
    <>
    <Header/>
    <div className="container">
      <h1 className="text-center" >Wizard Assistant Toolkit</h1>
      <p className="text-center">
        This tool allows you and your Support Agents to rapidly debug cPanel/Plesk/Cyberpanel account issues and review and check for common DNS issues. Fill in any known combination of  inputs. The domain can be aquired from the form input of Domain, Url, or
        Email in that priority if entered.See an example of the form filled in <a>Here</a>
      </p>
      <div className="container-width">
      <MultilineTextFields/>
      <p>Are you tired of custom crafting strings to parse logs? This webapp allows for rapid debugging 
        by pregenerating all the Bash commands with click to copy to clipboard.</p>
      <hr />
      </div>
      
      
      <footer className="text-center">
      <div className="container">
        <p>Copyright &copy; <a className='footer-link'>Wizard Assistant</a> All rights reserved.</p>
      </div>
      </footer>
    </div>
    </>

  )
}