import React from 'react'
import '../App.css';

const Footer = () => {
  return (
    <footer className="text-center">
    <hr style= {{ marginTop: '20px' }}/>
    <div style= {{ marginTop: '20px' }}>
          <div className="container">
            <p >
            Are you tired of custom crafting strings to parse logs? 
            This webapp allows for rapid debugging by pregenerating all the Bash commands with click to copy to clipboard.
            </p>
          </div>
        </div>
    <hr/>
    <div className="container">
      <p>Copyright &copy; <a className='footer-link'>Wizard Assistant</a> All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
