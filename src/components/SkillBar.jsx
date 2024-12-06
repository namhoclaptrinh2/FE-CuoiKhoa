import React from 'react';

function SkillBar({ skill, level,background }) {
  return (
    <div className='w-full flex justify-between gap-1 items-center'>
      <div className='w-[15%]'>
        <button className={`bg-${background}-500 text-white px-1 py-3 rounded-lg w-full text-base`}>{skill}</button>
      </div>
      <div className='w-[85%]'>
        <h1 className={`h-3 w-[${level * 10}%] bg-${background}-500 rounded-lg `}></h1> 
      </div> 
    </div>
  );
}

export default SkillBar;