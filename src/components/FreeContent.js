import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import Axios from 'axios'
import './MainContent.css'

export default function FreeContent() {
  const [postList, setPostList ] = useState([]); // 게시글 담는 리스트
  
  // 게시글 가져옴
  useEffect(() => {
    Axios.get('http://localhost:7456/freelists')
      .then(async (response) => {
        setPostList(response.data);
      }).catch(() => {
        console.log("Error");
      });
  }, [])

  return (
    <div className='content__wrapper'>
      <div className='content__body'>
        {/* 페이지 설명 */}
        <div className='content__header'>
          <h1>자유게시판</h1>
        </div>
        {/* 컨텐츠 올리는 곳 */}
        <div className='content__content'>
          {/* 헤더 */}
          <div className='content__list__header'>
            <p>글 목록</p>
            <input type='text'></input>
          </div>

          {/* 게시글 칸 */}
          <div className='content__list__body'>
            {/* 게시글 목차? */}
            <div className='content__list__title'>
              <p>제목</p>
              <p>조회수</p>
            </div>

            {/* 게시글 */}
            <div className='content__lists'>
              {postList.map((val) => {
                return (
                    <Link to={'free/'+val._id}><li>{val.title}</li></Link>
                )
              })}
            </div>
            
          </div>
          {/* footer */}
          <div className='content__list__footer'>
            <Link to='free/posting'>
              <button className='btn__posting'>게시글 생성</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}