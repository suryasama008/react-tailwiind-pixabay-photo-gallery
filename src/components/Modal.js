import React from 'react'

const Modal = ({ show, close }) => {
  return (
    <div
      className={`${
        show ? 'fixed' : 'hidden'
      } z-100 inset-0 overflow-y-auto max-w-2xl mx-auto my-20 `}
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        ></div>

        <div className='bg-gradient-to-br from-blue-200 via-white to-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-96 sm:h-96'>
          <div className='bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-full flex flex-col'>
            <div className='text-center justify-center'>
              <h3
                className='text-xl leading-6 font-medium text-gray-900 mt-4 mx-auto mb-3'
                id='modal-title'
              >
                Introduction
              </h3>
              <hr className='my-4' />
            </div>

            <div className='mt-2 flex-grow'>
              <p className='text-lg text-gray-700'>
                I am a full stack developer skilled in React.js, Node.js, and
                Firebase. I have experience in building end-to-end web
                applications using React, Material-UI, Express.js, and Tailwind
                CSS. Check out my{' '}
                <a
                  href='https://surya-sama.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600'
                >
                  profile here
                </a>
                .
              </p>
              <hr className='my-4' />
              <p className='text-lg text-gray-700'>
                This gallery was built using React, Tailwind CSS, and the
                Pixabay API. Check out the{' '}
                <a
                  href='https://github.com/suryasama008/react-tailwiind-pixabay-photo-gallery'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600'
                >
                  code here
                </a>
                .
              </p>
              <hr className='my-4' />
              <p className='text-lg text-gray-700 text-center'>
                - Surya Sama
              </p>
            </div>
            <div className='bg-transparent px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                onClick={close}
              >
                Proceed to Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
