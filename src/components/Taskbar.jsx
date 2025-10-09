const Taskbar = ({ windows, onWindowClick, time }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit'
    })
  }

  return (
    <div className="taskbar">
      {/* Start Button */}
      <button className="start-button">
        <span style={{ fontSize: '20px' }}>🪟</span>
        <span>Démarrer</span>
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
            <span>{window.icon}</span>
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
  )
}

export default Taskbar

