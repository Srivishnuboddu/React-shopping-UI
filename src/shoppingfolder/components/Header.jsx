import React from 'react'

const Header = () => {
  return (
    <div className='headerBody'>
      <div className="head">
        <strong >My Shopping app</strong>
      </div >
      <div className="login"><button>SignIn / signUp</button></div>
      <div className="search">
        <input type="text" placeholder='Search..' />
        <button type="submit">Q</button>
      </div>
      <div className="cart"><button>Cart</button></div>
      
    </div>
  )
}

export default Header
