import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Home({url, setUrl}) {
  return (
    <div>
        <Navbar />
        <Main url={url} setUrl={setUrl} />

    </div>
  )
}

export default Home