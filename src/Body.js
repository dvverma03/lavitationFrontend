// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from './cards';

const Body = () => {
  const invoice = useSelector((store) => store?.invoice?.invoice);

  return (
    <div className="flex flex-col min-h-[750px]">
      <div>
        <ul className='flex justify-between mx-4 py-4'>
          <li className='text-xl font-bold w-1/5'>Product</li>
          <li className='text-xl font-bold w-1/5'>Qyt</li>
          <li className='text-xl font-bold w-1/5'>Rate</li>
          <li className='text-xl font-bold w-1/5'>Total</li>
        </ul>
        <hr />
        <Cards invoice={invoice} />
        <hr/>
      </div>

    </div>
  );
};

export default Body;
