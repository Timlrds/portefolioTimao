import React, { useState } from 'react'
import GamesContent from './games/GamesContent'
import GmaecubeGame from './games/GmaecubeGame'

const GamesModal = ({ isOpen, isMinimized, onClose, onMinimize, onRestore }) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [currentView, setCurrentView] = useState('games') // 'games' ou 'gmaecube'
  
  if (!isOpen) return null

  // Si minimisée, ne rien afficher (sera géré par la barre des tâches)
  if (isMinimized) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: isMaximized ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
      display: 'flex',
      alignItems: isMaximized ? 'stretch' : 'center',
      justifyContent: 'center'
    }}>
      {/* Modal Container */}
      <div className="window" style={{
        width: isMaximized ? '100vw' : '900px',
        maxWidth: isMaximized ? '100vw' : '95vw',
        height: isMaximized ? '100vh' : '700px',
        maxHeight: isMaximized ? '100vh' : '95vh',
        position: 'relative',
        boxShadow: isMaximized ? 'none' : '4px 4px 20px rgba(0,0,0,0.8)'
      }}>
        {/* Title Bar */}
        <div className="title-bar">
          <div className="title-bar-text">
            <span style={{ marginRight: '6px' }}>🎮</span>
            Jeux.exe - Gmaecube
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={onMinimize}>
              <span style={{ fontWeight: 'bold' }}>_</span>
            </button>
            <button aria-label="Maximize" onClick={() => setIsMaximized(!isMaximized)}>
              <span style={{ fontWeight: 'bold' }}>{isMaximized ? '❐' : '□'}</span>
            </button>
            <button aria-label="Close" onClick={onClose}>
              <span style={{ fontWeight: 'bold' }}>×</span>
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className="window-body" style={{
          height: 'calc(100% - 30px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ 
            flex: 1, 
            padding: '20px', 
            marginBottom: '20px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Titre en haut */}
            <h1 style={{ 
              color: '#000080', 
              margin: '0 0 20px 0',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              borderBottom: '2px solid #c0c0c0',
              paddingBottom: '10px'
            }}>
              🎮 {currentView === 'games' ? 'Mes Jeux' : 'Gmaecube'}
            </h1>
            
            {/* Contenu dynamique */}
            {currentView === 'games' ? (
              <GamesContent onGameSelect={(gameId) => {
                if (gameId === 'gmaecube') {
                  setCurrentView('gmaecube')
                }
              }} />
            ) : (
              <GmaecubeGame onBack={() => setCurrentView('games')} />
            )}
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            borderTop: '2px solid #c0c0c0',
            paddingTop: '15px'
          }}>
            <button 
              className="button"
              onClick={onClose}
            >
              ❌ Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesModal
