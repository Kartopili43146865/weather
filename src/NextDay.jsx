import rainy1 from './animated/day.svg'
import rainy2 from './animated/rainy-2.svg'
import rainy3 from './animated/rainy-4.svg'
import rainy4 from './animated/rainy-5.svg'
import rainy5 from './animated/rainy-6.svg'

import React, { useEffect, useState } from 'react';

export default function NextDay( {id,rainsum,temperature_2m_max,sunrise,sunset,temperature_2m_min,windspeed_10m_max,time} ){
  const [rain, setRain] = useState(rainsum * 10)
  const [image, setImage] = useState(rainy1)


  useEffect(() => {
    if(rain > 60){
      setImage(rainy5)
    }else if(rain > 40){
      setImage(rainy4)
    }else if(rain > 20){
      setImage(rainy3)
    }else if(rain > 0) {
      setImage(rainy2)
    } else {
      setImage(rainy1)
    }
  })

  if(id != 0){
    return(
      
      <div className="next-5-days__row">

      <div className="next-5-days__date">
        {time.slice(0,4)}
        <div className="next-5-days__label"> {time.slice(-5)}</div>
      </div>

      <div className="next-5-days__low">
        {Math.round(temperature_2m_min)}&deg;
        <div className="next-5-days__label">Low</div>
      </div>

      <div className="next-5-days__high">
        {Math.round(temperature_2m_max)}&deg;
        <div className="next-5-days__label">High</div>
      </div>

      <div className="next-5-days__icon">
        <img src={image} alt="Mostly sunny" />
      </div>

      <div className="next-5-days__rain">
        {rainsum}mm
        <div className="next-5-days__label">Rain</div>
      </div>

      <div className="next-5-days__wind">
        {Math.round(windspeed_10m_max)}mph
        <div className="next-5-days__label">Wind</div>
      </div>

    </div>
    )
  }
    
}