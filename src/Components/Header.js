import React from 'react'
import group83490 from './img/group-83490.svg'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="left">
            <div className="imgcont"><img src={group83490} alt="" /></div>
            <div className="text">NeoFi</div>
        </div>
        <div className="middle">
            <div className="selected">Trade</div>
            <div className="hbutton">Earn</div>
            <div className="hbutton">Support</div>
            <div className="hbutton">About</div>

        </div>
        <div className="right">
            <button>
                Connect Wallet
            </button>
        </div>
    </div>
  )
}

export default Header