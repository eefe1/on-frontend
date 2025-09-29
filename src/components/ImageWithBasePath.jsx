import React from 'react'

const ImageWithBasePath = ({ src, className, alt, ...props }) => {
  // You can modify this base path as needed
  const basePath = '/src/'
  const imageSrc = src.startsWith('https') ? src : `${basePath}${src}`
  
  const handleImageError = (e) => {
    console.warn(`Image failed to load: ${imageSrc}`)
    // Set a fallback or hide the image
    e.target.style.display = 'none'
  }
  
  return (
    <img 
      src={imageSrc} 
      className={className} 
      alt={alt} 
      onError={handleImageError}
      {...props}
    />
  )
}

export default ImageWithBasePath 