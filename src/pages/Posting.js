import React from 'react';
import './Main.css';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import PostingContent from '../components/PostingContent';

export default function Posting() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <PostingContent />
      </div>
    </div>
  )
}
