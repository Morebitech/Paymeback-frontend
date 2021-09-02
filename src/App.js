
import './App.css';
import './apt.css';
import Footer from './components/Footer/Footer';
// import Above from './components/AboveFooter/Above';
import Hero from './components/Hero/Hero';
import Content from './components/Last/Last';
import Navbar from './components/Navbar/Navbar';
import Under from './components/UnderHero/Under';
import Winner from './components/Winner/Winner';
import Youtube from './components/Youtube/Youtube';

import Signin from './Signin/Signin';

import Contact from './ContactSection/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Create from './Createaccount/Create';
import Locatiion from './ContactSection/Locatiion';
import Faq from './FAQ/Faq';


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


          


            {/* <Route path='/about'  component={About}/> */}

            <Route path='/log in' component={Signin}/>
            <Route path='/sign Up' component={Create}/>




            {/* <Route path='/contact' component={Contact} /> */}
            <Route path='/contact' exact render={props =>

              <div className = "cont-wrappmee">
                    <div className = "contact-wrapper" >
                        <div className="colLeft">
                          <Contact />
                        </div>
                      <div className="colRight">
                        <Locatiion />
                      </div>
                  
                    </div>
                    <Footer />
              </div>
              

              
            } />



            <Route path='/faq' exact render={props =>

            <div>
                <Faq />
                <Footer />
            </div>



            } />

            {/* pfprprprprp */}

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
