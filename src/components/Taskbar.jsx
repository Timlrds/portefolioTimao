import { useState } from 'react'

const Taskbar = ({ windows, onWindowClick, time, cvModalState, onCvModalRestore }) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false)

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit'
    })
  }

  const handleShutdown = () => {
    if (window.confirm('Êtes-vous sûr de vouloir arrêter ?')) {
      window.close()
      // Si window.close() ne fonctionne pas (certains navigateurs bloquent), on redirige vers une page vide
      setTimeout(() => {
        window.location.href = 'about:blank'
      }, 100)
    }
  }

  const handleRestart = () => {
    if (window.confirm('Êtes-vous sûr de vouloir redémarrer ?')) {
      window.open(window.location.href, '_blank')
      setTimeout(() => {
        window.close()
        window.location.href = 'about:blank'
      }, 500)
    }
  }

  return (
    <>
      {/* Start Menu */}
      {startMenuOpen && (
        <>
          {/* Overlay to close menu when clicking outside */}
          <div 
            onClick={() => setStartMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
          />
          
          {/* Start Menu */}
          <div style={{
            position: 'fixed',
            bottom: '50px',
            left: '2px',
            width: '180px',
            height: '120px',
            background: '#c0c0c0',
            border: '2px solid',
            borderColor: '#ffffff #000000 #000000 #ffffff',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Windows 98 Header */}
            <div style={{
              background: 'linear-gradient(to bottom, #000080, #1084d0)',
              color: 'white',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: 'bold',
              borderBottom: '2px solid #ffffff',
              textAlign: 'center',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Windows 98
            </div>
            
            {/* Menu Items */}
            <div style={{ 
              flex: 1, 
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
              <button 
                onClick={handleRestart}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '6px 12px',
                  marginBottom: '2px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '12px'
                }}
              >
                Redémarrer
              </button>
              
              <div style={{
                height: '1px',
                background: '#808080',
                margin: '2px 0',
                borderTop: '1px solid #ffffff'
              }} />
              
              <button 
                onClick={handleShutdown}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '6px 12px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '12px'
                }}
              >
                Arrêter...
              </button>
            </div>
          </div>
        </>
      )}

      <div className="taskbar">
        {/* Start Button */}
        <button 
          className="start-button" 
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          style={{ padding: 0, border: 'none', background: 'transparent' }}
        >
          <img src="/Image/logodemarrage.jpg" alt="Démarrer" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </button>

      {/* Separator */}
      <div style={{
        width: '2px',
        height: '30px',
        background: '#808080',
        margin: '0 4px',
        borderLeft: '1px solid #ffffff'
      }} />

      {/* Open Windows */}
      <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
        {/* CV Modal dans la barre des tâches si minimisée */}
        {cvModalState.isOpen && cvModalState.isMinimized && (
          <button
            onClick={() => {
              console.log('CV button clicked in taskbar - using same logic as desktop double-click')
              // Utilise la même logique que le double-clic sur le bureau
              onCvModalRestore()
            }}
            style={{
              maxWidth: '160px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              background: '#c0c0c0',
              fontWeight: 'normal'
            }}
          >
            <span>📄</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              CV.doc
            </span>
          </button>
        )}

        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            style={{
              maxWidth: '160px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              background: window.isMinimized ? '#c0c0c0' : '#ffffff',
              fontWeight: window.isMinimized ? 'normal' : 'bold'
            }}
          >
            {window.icon.startsWith('/') ? (
              <img src={window.icon} alt="" style={{ width: '16px', height: '16px' }} />
            ) : (
              <span>{window.icon}</span>
            )}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {window.title}
            </span>
          </button>
        ))}
      </div>

        {/* Clock */}
        <div className="clock">
          <span>🕐</span>
          <span style={{ marginLeft: '4px' }}>{formatTime(time)}</span>
        </div>
      </div>
    </>
  )
}

export default Taskbar

