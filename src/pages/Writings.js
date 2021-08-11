import React from 'react';
import './Main.css';
import Header from '../layouts/Header';
import MainMenu from '../layouts/MainMenu';
import WritingContent from '../components/WritingContent';

export default function Writings() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <WritingContent />
      </div>
    </div>
  )
}
