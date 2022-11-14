import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Routes>
          <Route path='profile' element={<ProfileContainer
                                    store={props.store} />} />;
          <Route path=':userId' element={<ProfileContainer
                                    store={props.store} />} />;                         
          <Route path='/dialogs/*' element={<DialogsContainer
                                    store={props.store} />} />;
          <Route path='/users' element={<UsersContainer />} />;
          <Route path='/news' element={<News />} />;
          <Route path='/music' element={<Music />} />;
          <Route path='/settings' element={<Settings />} />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
