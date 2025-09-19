import React, { use } from 'react';
import Count from './countr/Count';

const Country = ({countriesPromise}) => {
   
   const countriesData= use(countriesPromise)
   const count=countriesData.countries
   
   
   
   
   
   return (
        <div>
            <h1>Country:{count.length}</h1> 
            <div className='grid grid-cols-3'>

            
            {count.map(country=> <Count key={country.cca3.cca3} country={country}></Count> )
            } </div>
        </div>
    );
};

export default Country;