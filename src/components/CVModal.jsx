import React, { useState } from 'react'

const CVModal = ({ isOpen, isMinimized, onClose, onMinimize, onRestore }) => {
  const [isMaximized, setIsMaximized] = useState(false)
  
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
        width: isMaximized ? '100vw' : '800px',
        maxWidth: isMaximized ? '100vw' : '90vw',
        height: isMaximized ? '100vh' : '600px',
        maxHeight: isMaximized ? '100vh' : '90vh',
        position: 'relative',
        boxShadow: isMaximized ? 'none' : '4px 4px 20px rgba(0,0,0,0.8)'
      }}>
        {/* Title Bar */}
        <div className="title-bar">
          <div className="title-bar-text">
            <span style={{ marginRight: '6px' }}>📄</span>
            CV.doc - Timao Gourdais
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
          padding: '20px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* CV Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '20px',
            borderBottom: '2px solid #c0c0c0',
            paddingBottom: '10px'
          }}>
            <h2 style={{ 
              color: '#000080', 
              margin: 0,
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              📄 CV - Timao Gourdais
            </h2>
          </div>

          {/* CV Content */}
          <div style={{
            flex: 1,
            border: '2px inset #c0c0c0',
            background: 'white',
            padding: '20px',
            marginBottom: '20px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* CV Image Viewer */}
            <div style={{ 
              flex: 1, 
              minHeight: '400px',
              border: '1px solid #ccc',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'auto',
              background: '#f5f5f5'
            }}>
              <img
                src="/Image/CV4.png"
                alt="CV Timao Gourdais"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '2px'
                }}
                onLoad={() => {
                  console.log('CV image loaded successfully')
                }}
                onError={(e) => {
                  console.log('CV image failed to load:', e)
                }}
              />
              
              {/* Zoom controls */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 10,
                display: 'flex',
                gap: '5px'
              }}>
                <button 
                  className="button"
                  style={{ fontSize: '10px', padding: '2px 6px' }}
                  onClick={() => {
                    window.open('/Image/CV4.png', '_blank');
                  }}
                >
                  🔍 Ouvrir image
                </button>
              </div>
            </div>

            {/* Fallback content if PDF doesn't load */}
            <div style={{
              textAlign: 'center',
              padding: '10px',
              color: '#666',
              fontSize: '12px',
              borderTop: '1px solid #ccc',
              marginTop: '10px'
            }}>
              <p>📄 CV de Timao Gourdais</p>
              <p>Si le PDF ne s'affiche pas correctement, utilisez les boutons ci-dessous</p>
            </div>
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
              onClick={() => {
                window.open('/Image/CV4.png', '_blank');
              }}
            >
              🔍 Ouvrir dans un nouvel onglet
            </button>
            
            <button 
              className="button"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Image/CV4.png';
                link.download = 'CV_Timao_Gourdais.png';
                link.click();
              }}
            >
              💾 Télécharger CV
            </button>
            
            <button 
              className="button"
              onClick={() => {
                window.open('/Image/CV4.png', '_blank');
                setTimeout(() => window.print(), 500);
              }}
            >
              🖨️ Imprimer
            </button>

            <button 
              className="button"
              onClick={onClose}
            >
              ❌ Fermer
            </button>
          </div>

          {/* Info message */}
          <div style={{
            marginTop: '10px',
            padding: '8px',
            background: '#c0c0c0',
            border: '1px inset #c0c0c0',
            fontSize: '11px',
            textAlign: 'center'
          }}>
            💡 Double-cliquez sur le PDF pour le faire défiler • Cliquez sur Fermer ou appuyez sur Échap pour fermer
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVModal
