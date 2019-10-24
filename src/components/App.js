import React, { useState } from 'react'
import Generate from './Generate'

import '../styles/App.css'

function App() {
  const [quote, setQuote] = useState()

  const getQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(res => setQuote(res.quote))
      .catch(e => console.log(e.message))
  }

  return (
    <div className="App">
      <h1>Kanye Quote Generator</h1>
      <div className="tweet">
        <div className="header">
          <img alt="yeezy the lord and savior" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg" />
          <div className="username">
            <b>ye</b>
            <p>@kanyewest</p>
          </div>
        </div>
        <div className="content">
          {quote && <p>{quote}</p>}
          {!quote && <p>Quote Text Goes Here...</p>}
        </div>
        <div className="footer">
          <Generate onClick={getQuote} />
        </div>
      </div>
    </div>
  )
}

export default App
