import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {

  

  return (
    <div className='header__wrapper'>
      <div className='header__body'>
        <Link to='/'><button id='home__btn'>HOME</button></Link>
        <div className='header__btns'>
          <Link to='writings'> <button>내가 쓴 글</button></Link>
          <Link to='i-like'><button>좋아요한 글</button></Link>
          <button>마이페이지</button>
        </div>
      </div>
    </div>
  )
}
