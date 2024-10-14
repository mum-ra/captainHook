import React from 'react';
import './App.css';
import SimpleHook from './components/simple-hook';
import AdvancedHook from './components/advanced-hook';
import DynamicHook from './components/dynamic-hook';

function App() {
  return (
    <>
      <span className='flex text-xl pl-10 pt-6 font-bold text-red-900'>Captain Hook form</span>
      <div className="flex flex-rol align-center h-[100vh] px-10 pt-4 w-full justify-around">
        <SimpleHook />
        <div className='border-left-2' />
        <AdvancedHook />
        <div className='border-left-2' />
        <DynamicHook />
      </div>
    </>
  );
}

export default App;