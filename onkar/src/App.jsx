import React from 'react';
import styles from "./style";

import { Navbar, Hero, Services, Products, Testimonials, Location, Footer, Copyright } from './components';


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
       </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          <Products />
          <Testimonials />
          <Location />
          <Footer />
          <Copyright />
        </div>
      </div>
    </div>
  );

};

export default App;
