import React from 'react';
import '../Main.css';
import Header from '../../layouts/Header';
import MainMenu from '../../layouts/MainMenu';
import SchoolPostingContent from '../../components/posting/SchoolPostingContent';

export default function SchoolPosting() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <SchoolPostingContent />
      </div>
    </div>
  )
}
