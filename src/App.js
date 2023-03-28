import './App.css';
import Router from './routes/Route';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';

function App() {
  return (
    <>

    <Header />
    <Router/>
    <Footer />

    </>
  );
}

export default App;
