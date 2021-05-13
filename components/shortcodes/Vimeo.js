import React from 'react';

function Vimeo(props) {
  return (
    <div>
      <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
        <iframe
          src={`https://player.vimeo.com/video/${props.video_id ? props.video_id : ''}`}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} title="Vimeo Video"></iframe>
      </div>
    </div>
  );
}

export default Vimeo;