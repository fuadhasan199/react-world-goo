
import Country from './countries/country';
import React, { Suspense } from 'react';

const countriesPromise=fetch('https://openapi.programming-hero.com/api/all') 
.then(res =>res.json()) 

const App = () => {
  return (
    <div> 
      <Suspense fallback={<p>Loading data.....</p>}>
     
     <Country countriesPromise={countriesPromise}></Country>
      
      
      </Suspense>
     
    </div>
  );
};

export default App;