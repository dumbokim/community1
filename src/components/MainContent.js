import React, { useState, useEffect } from 'react'
import './MainContent.css'
import { Link, withRouter } from 'react-router-dom';
import Axios from 'axios';

function MainContent() {

  const [postList, setPostList ] = useState([]); // 게시글 담는 리스트
  
  // 게시글 가져옴
  useEffect(() => {
    Axios.get('http://localhost:7456/getlists')
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
          <h1>메인</h1>
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
                    <Link to={val._id}><li className="post_lists">{val.title}</li></Link>
                )
              })}
            </div>
            
          </div>
          {/* footer */}
          <div className='content__list__footer'>
            <Link to='posting'>
              <button className='btn__posting'>게시글 생성</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainContent);