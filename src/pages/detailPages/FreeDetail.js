import React from 'react';
import '../Main.css';
import Header from '../../layouts/Header';
import MainMenu from '../../layouts/MainMenu';
import FreeDetailContent from '../../components/details/FreeDetailContent';

export default function FreeDetail() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <FreeDetailContent />
      </div>
    </div>
  )
}
