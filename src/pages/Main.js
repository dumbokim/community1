import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../layouts/Header';
import MainMenu from '../layouts/MainMenu';
import MainContent from '../components/MainContent';
import FreeContent from '../components/FreeContent';
import SchoolContent from '../components/SchoolContent';
import HoneyContent from '../components/HoneyContent';
import ViewRankContent from '../components/ViewRankContent';
import LikeRankContent from '../components/LikeRankContent';
import CommentRankContent from '../components/CommentRankContent';
import SecretContent from '../components/SecretContent';
import IWriteContent from '../components/IWriteContent';
import ILikeContent from '../components/ILikeContent';


export default function Main() {
  return (
    <Router>
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />
        
        <Switch>
          <Route path="/" exact component={MainContent} />  
          <Route path="/free" exact component={FreeContent} />
          <Route path="/honey" exact component={HoneyContent} />
          <Route path="/view-rank" exact component={ViewRankContent} />
          <Route path="/like-rank" exact component={LikeRankContent} />
          <Route path="/comment-rank" exact component={CommentRankContent} />
          <Route path="/secret" exact component={SecretContent} />
          <Route path="/school" exact component={SchoolContent} />
          <Route path="/i-like" exact component={ILikeContent} />
          <Route path="/i-write" exact component={IWriteContent} />
          
        </Switch>
      </div>
    </div>
    </Router>

  )
}
