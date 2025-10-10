import React from 'react'

const AboutContent = ({ onGamesModalOpen }) => {
  return (
    <div style={{ 
      flex: 1,
      backgroundColor: 'white',
      minHeight: '400px',
      overflow: 'auto',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Section Gmaecube cliquable avec texte "Jeux" */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (onGamesModalOpen) {
            onGamesModalOpen()
          }
        }}
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
          Jeux
        </span>
      </div>

    </div>
  )
}

export default AboutContent
