import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './components/GlobalStyle';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import { useEffect } from 'react';
import TodoPage from './pages/TodoPage';


function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');

    // 로컬 스토리지에 토큰이 있는지 확인하여 리다이렉트 처리
    if (token && (window.location.pathname === '/signin' || window.location.pathname === '/signup')) {
      window.location.href = '/todo';
    } else if (!token && window.location.pathname === '/todo') {
      window.location.href = '/signin';
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/signup' element={<SignupPage />}></Route>
          <Route path='/signin' element={<SigninPage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
