import logo from './logo.svg';
import './App.css';
import Hero from './Components/Elements/Hero';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './Components/Elements/Page';
import Page1 from './Components/Elements/Page1';
import Page2 from './Components/Elements/Page2';
import Page3 from './Components/Elements/Page3';
import Page4 from './Components/Elements/Page4';


function App() {
  return (
    <div className="App">
      <Header/>
      <Page4 />
      <Hero/>
      <Page/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Footer/>
      
    </div>
  );
}

export default App;
