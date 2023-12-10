import React from 'react'

export default function Socials() {

  return (
    <>
      <div className='s-youtube'>
        <iframe
          width="560" height="315" src="https://www.youtube.com/embed/Fd5clV9SzRE?si=0qWugdN1XKdhCmh6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>

      <div className='s-facebook'>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNMBA.MSJE%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="600" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>

      
    </>
  )
}
