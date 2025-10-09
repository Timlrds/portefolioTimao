import React, { useState } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window98 from './components/Window98'
import CVModal from './components/CVModal'

function App() {
  const [windows, setWindows] = useState([])
  const [time, setTime] = useState(new Date())
  const [cvModalState, setCvModalState] = useState({ isOpen: false, isMinimized: false })

  // Update clock every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const openWindow = (id, title, content, icon) => {
    console.log('openWindow called with:', id, title)
    console.log('Current windows:', windows.length, windows.map(w => ({ id: w.id, minimized: w.isMinimized })))
    
    // Always force open the window (remove existing first, then create new)
    console.log('Force opening window:', id)
    setWindows(prevWindows => {
      // Remove existing window with same id
      const filteredWindows = prevWindows.filter(w => w.id !== id)
      // Add new window
      return [...filteredWindows, {
        id,
        title,
        content,
        icon,
        isMinimized: false
      }]
    })
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
  }

  const minimizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ))
  }

  return (
    <div className="win98-app">
      <Desktop openWindow={openWindow} onCvModalStateChange={setCvModalState} />
      
      {/* Render Windows */}
      {windows.map((window, index) => (
        !window.isMinimized && (
          <Window98
            key={window.id}
            title={window.title}
            icon={window.icon}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            zIndex={1000 + index}
          >
            {window.content}
          </Window98>
        )
      ))}
      
      <Taskbar 
        windows={windows} 
        onWindowClick={minimizeWindow}
        time={time}
        cvModalState={cvModalState}
        onCvModalRestore={() => {
          console.log('onCvModalRestore called - using same logic as desktop double-click')
          console.log('Setting cvModalState to: { isOpen: true, isMinimized: false }')
          setCvModalState({ isOpen: true, isMinimized: false })
        }}
      />

      {/* CV Modal */}
      <CVModal 
        isOpen={cvModalState.isOpen} 
        isMinimized={cvModalState.isMinimized}
        onClose={() => setCvModalState({ isOpen: false, isMinimized: false })}
        onMinimize={() => setCvModalState(prev => ({ ...prev, isMinimized: true }))}
        onRestore={() => setCvModalState(prev => ({ ...prev, isMinimized: false }))}
      />
    </div>
  )
}

export default App

