import './App.css';
import Router from './routes/Route';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import router from './routes/Route';
import { RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  return (
    <>

    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
