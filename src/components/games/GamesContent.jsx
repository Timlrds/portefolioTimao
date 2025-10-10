import React from 'react'

const GamesContent = ({ onGameSelect }) => {
  const handleGameClick = (gameId) => {
    if (onGameSelect) {
      onGameSelect(gameId)
    }
  }

  return (
    <div style={{ 
      flex: 1,
      backgroundColor: 'white',
      minHeight: '400px',
      overflow: 'auto',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Logo HALO */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img 
          src="/Image/halo2.png" 
          alt="HALO" 
          style={{ 
            width: '120px',
            height: '120px',
            objectFit: 'contain'
          }} 
          onLoad={() => console.log('HALO image loaded successfully')}
          onError={(e) => console.log('HALO image failed to load:', e)}
        />
        <span style={{
          color: '#000080',
          fontSize: '14px',
          fontWeight: 'bold',
          marginTop: '5px',
          textAlign: 'center'
        }}>
          HALO
        </span>
      </div>
    </div>
  )
}

export default GamesContent
