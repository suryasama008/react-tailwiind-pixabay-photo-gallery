import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Modal from './components/Modal'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className='mx-auto bg-gradient-to-br from-blue-00 via-blue-400 to-blue-800'>
      <NavBar />
      <div className='container mx-auto py-20 '>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className='text-5xl text-center mx-auto mt-32'>
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
        ) : (
          <div className='grid grid-cols-3 gap-4'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
        <Modal show={showModal} close={() => setShowModal(false)} />
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 shadow-lg p-4 z-50'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-white font-bold text-xl'>Pixabay Gallery</div>
          <div className='flex space-x-2'>
            <p className='text-white text-sm'>React</p>
            <p className='text-white text-sm'>Tailwind</p>
            <p className='text-white text-sm'>Pixabay API</p>
          </div>

          {/* Add more elements for the navbar here */}
        </div>
      </div>
    </nav>
  )
}


export default App;
