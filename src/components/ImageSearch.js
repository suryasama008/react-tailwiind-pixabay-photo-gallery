import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm  overflow-hidden mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center  border-blue-700 rounded-3xl border py-2'>
          <input
            onChange={(e) => setText(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-4 leading-tight focus:outline-none '
            type='text'
            placeholder='Search Image Term...'
          />
          <button
            className='flex-shrink-0  bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 hover:bg-blue-700 hover:border-teal-700 text-sm  text-white py-1 px-2 rounded-2xl mx-2'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch;
