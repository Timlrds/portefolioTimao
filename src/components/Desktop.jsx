import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import AboutContent from './windows/AboutContent'
import SkillsContent from './windows/SkillsContent'
import ProjectsContent from './windows/ProjectsContent'
import ContactContent from './windows/ContactContent'

const Desktop = ({ openWindow, onCvModalStateChange }) => {
  const [iconPositions, setIconPositions] = useState({})
  const [cvModalState, setCvModalState] = useState({ isOpen: false, isMinimized: false })

  // Notifier le parent des changements d'état de la modal CV
  useEffect(() => {
    if (onCvModalStateChange) {
      onCvModalStateChange(cvModalState)
    }
  }, [cvModalState, onCvModalStateChange])
  const desktopIcons = [
    {
      id: 'about',
      title: 'À Propos.exe',
      icon: '/Image/XVll7.png',
      content: <AboutContent />
    },
    {
      id: 'skills',
      title: 'Compétences.exe',
      icon: '/Image/poste1.png',
      content: <SkillsContent />
    },
    {
      id: 'projects',
      title: 'Projets.exe',
      icon: '/Image/logowind8.png',
      content: <ProjectsContent />
    },
    {
      id: 'contact',
      title: 'Contact.txt',
      icon: '/Image/logopareil55.png',
      content: <ContactContent />
    },
    {
      id: 'cv',
      title: 'CV.doc',
      icon: '/Image/logopareil87.png',
      content: null // Will be handled by modal
    }
  ]

  return (
    <div className="desktop">
      {desktopIcons.map((icon, index) => {
        const currentPosition = iconPositions[icon.id] || { x: 0, y: index * 80 }
        
        return (
          <Draggable 
            key={icon.id} 
            bounds="body"
            handle=".desktop-icon"
            defaultPosition={currentPosition}
            grid={[80, 80]}
            onStop={(e, data) => {
              setIconPositions(prev => ({
                ...prev,
                [icon.id]: { x: data.x, y: data.y }
              }))
            }}
          >
          <div 
            className="desktop-icon"
            onDoubleClick={(e) => {
              e.stopPropagation()
              console.log('Double click on:', icon.id, icon.title)
              if (icon.id === 'cv') {
                setCvModalState({ isOpen: true, isMinimized: false })
              } else {
                openWindow(icon.id, icon.title, icon.content, icon.icon)
              }
            }}
          >
                  <div style={{ cursor: 'move', pointerEvents: 'auto' }}>
                    {icon.icon.startsWith('/') ? (
                      <img 
                        src={icon.icon} 
                        alt={icon.title} 
                        style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                        onLoad={() => console.log(`Image loaded successfully: ${icon.icon}`)}
                        onError={(e) => console.log(`Image failed to load: ${icon.icon}`, e)}
                      />
                    ) : (
                      <div style={{ 
                        fontSize: '48px', 
                        width: '64px', 
                        height: '64px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginBottom: '4px'
                      }}>{icon.icon}</div>
                    )}
                  </div>
            <div className="desktop-icon-label">{icon.title}</div>
          </div>
          </Draggable>
        )
      })}


    </div>
  )
}

export default Desktop

