import React, { useState } from 'react'  
import { Routes, Route, Navigate } from 'react-router-dom';  
import Home from './Home';  
import Search from './Search';  
import Profile from './Profile';  
import Messages from './Messages';  
import Connections from './Connections';  
import Feed from './Feed';  
import Challenges from './Challenges';  
import Progress from './Progress';  
import PageNotFound from './PageNotFound';
import Postlist from './Postlist';  
import Post from '../pages/Post';

function Routing() {  
  
  return (  
    <div>

        <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/search" element={<Search />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/messages" element={<Messages />} />  
        <Route path="/connections" element={<Connections />} />  
        <Route path="/feed" element={<Postlist/>} /> 
        <Route path="/challenges" element={<Challenges />} />  
        <Route path="/progress" element={<Progress />} />  
        <Route path="/createpost" element={<Post />} />  
        <Route path="*" element={<PageNotFound />} />  
      </Routes>  

    </div>  
  );  
}  

export default Routing;