import React, { Fragment, useState } from 'react'
import VIDEO from "./video.json"
import VideoPlayer from './Components/VideoPlayer'
import Nav from './NAVBAR/Nav'

const App = () => {
  let [state, setState] = useState(VIDEO)
  let [player, setPlayer] = useState(state[0])
  console.log(state);


  let handlePlay = (rio) => {

    setPlayer(rio.videoUrl)

  }


  return (
    <Fragment>
      <Nav></Nav>
    
      <div id='app'>
        <VideoPlayer state={state} player={player} play={handlePlay}></VideoPlayer>
      </div>
    </Fragment>
  )
}

export default App