import { useState } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window98 from './components/Window98'

function App() {
  const [windows, setWindows] = useState([])
  const [time, setTime] = useState(new Date())

  // Update clock every second
  useState(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const openWindow = (id, title, content, icon) => {
    // Don't open if already exists
    if (windows.find(w => w.id === id)) return
    
    setWindows([...windows, {
      id,
      title,
      content,
      icon,
      isMinimized: false
    }])
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
      <Desktop openWindow={openWindow} />
      
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
      />
    </div>
  )
}

export default App

