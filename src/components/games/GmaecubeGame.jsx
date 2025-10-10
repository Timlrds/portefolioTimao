import React from 'react'

const GmaecubeGame = ({ onBack }) => {
  return (
    <div style={{ 
      flex: 1,
      backgroundColor: 'white',
      minHeight: '400px',
      overflow: 'auto',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Bouton retour */}
      <button 
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '8px 16px',
          backgroundColor: '#c0c0c0',
          border: '2px outset #c0c0c0',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        ← Retour
      </button>

      {/* Contenu du jeu Gmaecube */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '20px'
      }}>
        <img 
          src="/Image/gmaecube.jpg" 
          alt="Gmaecube Game" 
          style={{ 
            width: '200px',
            height: '200px',
            objectFit: 'contain'
          }} 
        />
        
        <h2 style={{ 
          color: '#000080', 
          margin: '0',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          🎮 Gmaecube
        </h2>

        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '2px',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: '#333', 
            margin: '0 0 15px 0',
            lineHeight: '1.6'
          }}>
            Un jeu passionnant en développement ! 
            Découvrez des aventures captivantes dans un univers unique.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
            marginTop: '20px'
          }}>
            <button className="button" disabled>
              🎯 Jouer
            </button>
            <button className="button" disabled>
              📖 Règles
            </button>
            <button className="button" disabled>
              🏆 Scores
            </button>
            <button className="button" disabled>
              ⚙️ Options
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GmaecubeGame
