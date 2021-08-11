import React from 'react'
import './MainMenu.css'
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div class='menu__wrapper'>
      <ul className='menu__body'>
        <Link to='free' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>자유게시판</li></Link>
        <Link to='school' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>학교 소식</li></Link>
        <Link to='honey' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>꿀팁게시판</li></Link>
        <Link to='view-rank' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>조회수 많은 글</li></Link>
        <Link to='like-rank' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>좋아요 많은 글</li></Link>
        <Link to='comment-rank' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>댓글 많은 글</li></Link>
        <Link to='secret' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>비밀게시판</li></Link>

      </ul>
    </div>
  )
}
