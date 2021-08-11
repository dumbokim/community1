import React from 'react';
import './Main.css';
import Header from '../layouts/Header';
import MainMenu from '../layouts/MainMenu';
import SecretContent from '../components/SecretContent';

export default function Main() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <SecretContent />
      </div>
    </div>
  )
}
