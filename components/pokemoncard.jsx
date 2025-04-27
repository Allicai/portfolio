import { useEffect, useRef, useState } from 'react'

export default function PokemonCard() {
  const cardRef = useRef(null)
  const shineRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current

    const handleMouseMove = e => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = -(y - centerY) / 10
      const rotateY = (x - centerX) / 10

      setRotation({ x: rotateX, y: rotateY })

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`
      setRotation({ x: 0, y: 0 })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const shine = shineRef.current
    if (shine) {
      const rotateX = rotation.x
      const rotateY = rotation.y

      // Adjust the shine rays based on the card's rotation
      shine.style.background = `
        linear-gradient(
          ${rotateY * 20 + 45}deg, 
          rgba(255, 255, 255, 0.2) 25%, 
          rgba(255, 255, 255, 0) 50%, 
          rgba(255, 255, 255, 0.2) 75%
        ),
        linear-gradient(
          ${rotateX * 10 + 135}deg, 
          rgba(255, 255, 255, 0.2) 25%, 
          rgba(255, 255, 255, 0) 50%, 
          rgba(255, 255, 255, 0.2) 75%
        )
      `
      shine.style.transform = `rotateX(0deg) rotateY(0deg)` // Prevent translation, just rotate
    }
  }, [rotation])

  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card" ref={cardRef}>
        <img
          src="/staraptor.png"
          alt="Pokemon"
          className="pokemon-card-art"
          style={{
            border: '5px solid rgb(255, 255, 255)', // Border color and style
            borderRadius: '12px',
            borderStyle: 'solid',
            display: 'block', // Remove gap around the image
            width: '100%', // Ensure the image fits the container
            height: 'auto' // Maintain aspect ratio
          }}
        />
        {/* Shine rays effect */}
        <div
          ref={shineRef}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: 0,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out', // Smooth transition for shine effect
            borderRadius: '12px' // Ensure shine is contained within the card border radius
          }}
        />
        {/* Custom editable area with white font and slightly darker background */}
        <div
          style={{
            backgroundColor: '#aab7d4', // Slightly darker background to mimic textarea
            color: 'white', // Set text color to white
            border: 'none', // No border around the contenteditable area
            width: '100%', // Take full width of the container
            height: '210px', // Adjust the height of the area
            padding: '10px', // Padding inside the content area for better readability
            fontFamily: 'Arial, sans-serif', // Optional: specify font for readability
            fontSize: '14px', // Optional: adjust font size if needed
            fontWeight: 'normal', // Ensure text weight is normal
            outline: 'none', // Remove outline
            whiteSpace: 'pre-wrap', // Ensure wrapping works correctly
            overflow: 'auto', // Allow scrolling if needed
            borderRadius: '8px' // Optional: add rounded corners to match the card's style
          }}
        >
          It has left the flock, having gained strength enough to survive on its
          own. The astounding force with which Staraptor flies through the air
          allows it to carry away large, burly targets. It will courageously
          challenge foes that are much larger and never stops attacking even if
          it is injured.
        </div>
      </div>
    </div>
  )
}
