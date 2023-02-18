import React from 'react';

function YoutubeIFrame({ iFrame }) {
  const srcRegex = /src="([^"]+)"/;
  const titleRegex = /title="([^"]+)"/;

  const srcMatch = iFrame.match(srcRegex);
  const titleMatch = iFrame.match(titleRegex);

  return (
    <iframe
      className="w-full aspect-video"
      src={srcMatch[1]}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      title={titleMatch[1]}
    ></iframe>
  );
}

export default YoutubeIFrame;
