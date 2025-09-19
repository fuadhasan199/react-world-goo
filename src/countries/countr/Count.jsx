import React from 'react';

const Count = ({country}) => { 
  // console.log(country) 
 
  const handleBtn=() => {
    
  }
 

  return (
    <div> 
      <div className='m-10 p-5 border border-red-200'>

   
      <img src={country.flags.flags.png} alt="" />
      <h1 className='font-bold text-2xl mt-5'> Name :{country.name.common}</h1> 
      <h1 className='text-xl font-light'> Country area :{country.area.area} km² /
         {country.area.area > 300000 ? "Big Country" : "Small Country"}</h1> 
      
        <button onClick={handleBtn} className='border-green-400 border bg-green-400 p-2mt-2'>Not Visited</button>

   </div>
    </div>
  );
};

export default Count;