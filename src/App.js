
import './App.css';
import Footer from './components/Footer/Footer';
// import Above from './components/AboveFooter/Above';
import Hero from './components/Hero/Hero';
import Content from './components/Last/Last';
import Navbar from './components/Navbar/Navbar';
import Under from './components/UnderHero/Under';
import Winner from './components/Winner/Winner';
import Youtube from './components/Youtube/Youtube';

import Signin from './Signin/Signin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

     <Router>

       
         <Navbar />
         
          <Switch>

         

              <Route path='/' exact render={props =>
              <div>
                  
                  <Hero />
                  <Under />

                  <Winner />

                  <Youtube />


                  <Content />

                  <Footer />
              </div>
          } />


          


            <Route path='/about'  component={About}/>

            <Route path='/log in' component={Signin}/>

            pfprprprprp

          </Switch>

              
          {/* 
            
            <Hero />

            <Under />

            <Winner />

            <Youtube />

          
            <Content />

            <Footer /> */}
     </Router>
 
     


     
      
    </div>
  );
}

export default App;
