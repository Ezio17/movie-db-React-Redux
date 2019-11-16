import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = props => (
  <div className='loading'>
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={props.height}
      width={props.width}
      className='loading__loader'
    />
  </div>
)

export default Loading


