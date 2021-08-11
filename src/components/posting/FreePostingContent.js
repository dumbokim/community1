import React, { useState } from 'react';
import '../MainContent.css';
import './PostingContent.css';
import Axios from 'axios';

export default function FreePostingContent() {

  const [ titleInput, setTitleInput ] = useState(''); // title input
  const [ pwdInput, setPwdInput ] = useState(''); // pwd input
  const [ descInput, setDescInput ] = useState(''); // desc input

  // post function
  const addPost = () => {
    // post object to api
    Axios.post('http://localhost:7456/writefree', 
    {title: titleInput, password: pwdInput, description: descInput})
      .then(() => {
        alert("게시글 작성 완료!");
        window.history.back(); // move to previous page
      })
  }

  return (
    <div className='content__wrapper'>
      <div className='content__body'>
        {/* 페이지 설명 */}
        <div className='content__header'>
          <h1>글쓰기</h1>
        </div>
        {/* 게시글 작성 칸 */}
        <div className='content__content'>
          {/* 제목, 비번 입력 */}
          <div className='posting__title'>
            <input id='input__title' type='text' placeholder='제목' onChange={(e)=>setTitleInput(e.target.value)} />
            <input id='input__pwd' type='password' placeholder='비밀번호' onChange={(e)=>setPwdInput(e.target.value)} />
          </div>
          {/* 내용 입력 */}
          <div className='posting__body'>
            <input id='input__desc' type='text' onChange={(e)=>setDescInput(e.target.value)} />
          </div>
          {/* 버튼 있는 footer */}
          <div className='posting__footer'>
            <button type='submit' onClick={addPost}>POST</button>
          </div>
        </div>
      </div>
    </div>
  )
}