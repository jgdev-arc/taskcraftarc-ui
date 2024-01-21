import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTaskComponent from './components/ListTaskComponent';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TaskComponent from './components/TaskComponent';
import { ToastContainer } from 'react-toastify';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import { isUserLoggedIn } from './services/AuthService';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const isAuth = isUserLoggedIn();

  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route
            path='/tasks'
            element={
              <AuthenticatedRoute>
                <ListTaskComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/add-task'
            element={
              <AuthenticatedRoute>
                <TaskComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/update-task/:id'
            element={
              <AuthenticatedRoute>
                <TaskComponent />
              </AuthenticatedRoute>
            }
          />
          <Route path='/register' element={<RegisterComponent />} />
          <Route path='/login' element={<LoginComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
