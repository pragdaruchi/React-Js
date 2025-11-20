import React from 'react';

export default function Menu() {
  return (
    <div>
      <div className="flex justify-center my-5">
        <img className='w-165 h-25' src="src/C.jpg" alt="" />
        <img className='w-165 h-25' src="src/D.jpg" alt="" />
      </div>
      <div className="flex justify-center my-10">
        <img className="h-100 w-180" src="src/A.png" alt="" />
        <img className="h-100 w-180" src="src/B.png" alt="" />
      </div>
      <div className="flex justify-center -my-10">
        <img className='w-350 my-10' src="src/E.gif" alt="" />
      </div>
    </div>
  );
}
