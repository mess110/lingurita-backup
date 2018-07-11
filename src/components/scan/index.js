import React from 'react'
import camera from '../../icons/camera.svg';

const getScanLink = () => {
  if (process.env.NODE_ENV === 'development') {
    return "zxing://scan/?ret=http://192.168.0.10:3000/items/{CODE}"
  } else {
    return "zxing://scan/?ret=https://mess110.github.io/lingurita/items/{CODE}"
  }
}

const Scan = () => (
  <a href={ getScanLink() }><img className="button-icon" src={camera} alt="scan"/></a>
)

export default Scan
