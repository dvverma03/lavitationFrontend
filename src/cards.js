import React, { useEffect, useState } from 'react'

const Cards = ({invoice}) => {

  
  const [grand, setGrand] = useState(null);
  
  useEffect(() => {
    function calculateTotal() {
      let total = 0;
      {invoice.length>0 && invoice.forEach((e) => {
        total += parseFloat(e.total);
      });}
      setGrand(total);
    }
    if (invoice) {
      calculateTotal();
    }
  }, [invoice]);

  return (
    <>
    <div>
      { invoice?.length>0 && invoice.map((e, index)=>
      <div className='flex justify-between mx-4 py-4 ' key={index}>
        <div className='text-[18px] font-bold w-1/5 px-2'>{e.product}</div>
        <div className='w-1/5 px-2'>{e.quantity}</div>
        <div className='w-1/5 px-2'>{e.rate}</div>
        <div className='w-1/5 px-2'><span>INR </span>{e.total}</div>
      </div>
      )}
    </div>
    <div>
    {grand!==0 && 
        <div className=' ml-auto w-1/3 mr-8'>
          <div className='flex justify-between mx-12 py-4'>
            <div>Total</div>
            <div className=''>{grand}</div>
          </div>
          <div className='flex justify-between mx-12 py-4'>
            <div>GST</div>
            <div className=''>18%</div>
          </div>
          <hr></hr>
          <div className='flex justify-between mx-12 py-4'>
            <div>GrandTotal</div>
            <div className=''>{grand+(.18*grand)}</div>
          </div>
        </div>
      }
    </div>
    </>
  )
}

export default Cards
