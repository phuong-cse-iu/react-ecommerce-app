import React, { useState, useEffect } from 'react';

const LazyLoadImage = ({ src, ...otherProps }) => {
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageReady(true);
    };
  }, [src]);

  return (
    <>
      {imageReady ? (
        <div
          className="image"
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default LazyLoadImage;
