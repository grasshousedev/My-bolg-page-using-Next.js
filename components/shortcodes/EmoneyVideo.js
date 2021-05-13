import React, { useEffect } from 'react';

function EmoneyVideo(props) {
  useEffect(() => {
    // load jw player
    const jw = document.createElement("script");
    jw.src = "https://content.jwplatform.com//libraries/ljXVSIQY.js";
    jw.async = true;

    const emaplan = document.createElement("script");
    emaplan.src = "https://abm.emaplan.com/ABM/MediaServe/Embed?token=ada28dae14e644548ef9ae466f8e7cac";
    emaplan.async = true;

    document.body.appendChild(jw);
    document.body.appendChild(emaplan);
  });
  return (
    <div>
      <div id='video-player-2056'></div>
      <div id='video-player-disclaimer-part-2056' style={{position:'relative'}}></div>
    </div>
  );
}

export default EmoneyVideo;