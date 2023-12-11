import React from 'react'

import './Socials.css'

export default function Socials() {

  return (
    <>
      <div className="Socials-head">
        <h1>SOCIALS</h1>
      </div>
      <div className='Socials'>

          <div className='s-youtube'>
              <div className="yt-tag">
                <h1>Youtube</h1>
              </div>
              <iframe 
              width="400" height="400" src="https://www.youtube.com/embed/Fd5clV9SzRE?si=0qWugdN1XKdhCmh6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
          </div>

          <div className='s-facebook'>
          <div className="fb-tag">
              <h1>Facebook</h1>
          </div>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNMBA.MSJE%2F&  tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true& appId" width="400" height="400" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0"    allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>

          <div className='s-insta'>
          <div className="ig-tag">
               <h1>Instagram</h1>
          </div>
          <iframe src="https://www.instagram.com/nashamuktbharatabhiyaan/embed/" width="400" height="400" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0"    allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
      </div>
    </>
  )
}
