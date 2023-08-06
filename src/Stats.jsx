function stats( {data} ){

    return(
        <div className="current-stats">
    <div>
      <div className="current-stats__value">{Math.round(data.daily.temperature_2m_max[0])}&deg;</div>
      <div className="current-stats__label">High</div>
      <div className="current-stats__value">{Math.round(data.daily.temperature_2m_min[0])}&deg;</div>
      <div className="current-stats__label">Low</div>
    </div>
    <div>
      <div className="current-stats__value">{Math.round(data.current_weather.windspeed)}mph</div>
      <div className="current-stats__label">Wind</div>
      <div className="current-stats__value">{data.daily.rain_sum[0]}mm</div>
      <div className="current-stats__label">Rain</div>
    </div>
    <div>
      <div className="current-stats__value">{data.daily.sunrise[0].slice(-5)}</div>
      <div className="current-stats__label">Sunrise</div>
      <div className="current-stats__value">{data.daily.sunset[0].slice(-5)}</div>
      <div className="current-stats__label">Sunset</div>
    </div>
  </div>
    )
}
export default stats