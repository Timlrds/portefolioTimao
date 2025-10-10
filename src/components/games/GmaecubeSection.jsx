import React from 'react'

const GmaecubeSection = ({ onGameClick }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer'
    }}
    onClick={() => onGameClick && onGameClick('gmaecube')}
    >
      <img 
        src="/Image/gmaecube.jpg" 
        alt="Gmaecube" 
        style={{ 
          width: '120px',
          height: '120px',
          objectFit: 'contain'
        }} 
        onLoad={() => console.log('Gmaecube image loaded successfully')}
        onError={(e) => console.log('Gmaecube image failed to load:', e)}
      />
      <span style={{
        color: '#000080',
        fontSize: '14px',
        fontWeight: 'bold',
        marginTop: '5px',
        textAlign: 'center'
      }}>
        Gmaecube
      </span>
    </div>
  )
}

export default GmaecubeSection
