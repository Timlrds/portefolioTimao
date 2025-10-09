import { useState } from 'react'
import Draggable from 'react-draggable'

const Window98 = ({ title, icon, children, onClose, onMinimize, zIndex = 1000 }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 })

  return (
    <Draggable
      handle=".title-bar"
      position={position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div className="window" style={{ 
        position: 'fixed',
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        zIndex: zIndex + 1000,
        boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
        backgroundColor: 'white'
      }}>
        {/* Title Bar */}
        <div className="title-bar">
          <div className="title-bar-text">
            <span style={{ marginRight: '6px' }}>{icon}</span>
            {title}
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={onMinimize}>
              <span style={{ fontWeight: 'bold' }}>_</span>
            </button>
            <button aria-label="Maximize" disabled>
              <span style={{ fontWeight: 'bold' }}>□</span>
            </button>
            <button aria-label="Close" onClick={onClose}>
              <span style={{ fontWeight: 'bold' }}>×</span>
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className="window-body" style={{ 
          maxHeight: 'calc(80vh - 40px)',
          overflowY: 'auto'
        }}>
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Window98

