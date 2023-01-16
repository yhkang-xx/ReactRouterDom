// import { BrowserRouter } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />} >
        {/* <Route path="/articles/:id" element={<Article />} /> */}
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />

        {/* 위의 라우터에 매칭되는 것이 없을 경우 아래 실행 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;