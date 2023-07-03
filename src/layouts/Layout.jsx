import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-[90%] mx-auto my-4'>
      {children}
    </div>
  )
}

export default Layout