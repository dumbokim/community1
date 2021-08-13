import React from 'react';
import '../Main.css';
import Header from '../../layouts/Header';
import MainMenu from '../../layouts/MainMenu';
import PostingContent from '../../components/posting/PostingContent';

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
