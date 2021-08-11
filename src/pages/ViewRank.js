import React from 'react';
import './Main.css';
import Header from '../layouts/Header';
import MainMenu from '../layouts/MainMenu';
import ViewRankContent from '../components/ViewRankContent';

export default function Main() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <ViewRankContent />
      </div>
    </div>
  )
}
