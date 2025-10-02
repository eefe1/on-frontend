import React from 'react'

const ImageWithBasePath = ({ src, className, alt, ...props }) => {
  // Handle different types of image sources
  const getImageSrc = (imageSrc) => {
    // If it's already a full URL (http/https), use it as is
    if (imageSrc.startsWith('http')) {
      return imageSrc
    }
    
    // If it starts with '/', it's already an absolute path
    if (imageSrc.startsWith('/')) {
      return imageSrc
    }
    
    // For relative paths, use the public directory
    // This works for both development and production
    return `/${imageSrc}`
  }
  
  const imageSrc = getImageSrc(src)
  
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