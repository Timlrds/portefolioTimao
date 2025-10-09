import AboutContent from './windows/AboutContent'
import SkillsContent from './windows/SkillsContent'
import ProjectsContent from './windows/ProjectsContent'
import ContactContent from './windows/ContactContent'

const Desktop = ({ openWindow }) => {
  const desktopIcons = [
    {
      id: 'about',
      title: 'À Propos.exe',
      icon: '👤',
      content: <AboutContent />
    },
    {
      id: 'skills',
      title: 'Compétences.exe',
      icon: '💻',
      content: <SkillsContent />
    },
    {
      id: 'projects',
      title: 'Projets.exe',
      icon: '📁',
      content: <ProjectsContent />
    },
    {
      id: 'contact',
      title: 'Contact.txt',
      icon: '📧',
      content: <ContactContent />
    },
    {
      id: 'cv',
      title: 'CV.doc',
      icon: '📄',
      content: <div className="window-body"><p>Téléchargement du CV...</p></div>
    }
  ]

  return (
    <div className="desktop">
      <div style={{ position: 'relative', zIndex: 1 }}>
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className="desktop-icon"
            onDoubleClick={() => openWindow(icon.id, icon.title, icon.content, icon.icon)}
          >
            <div style={{ fontSize: '48px' }}>{icon.icon}</div>
            <div className="desktop-icon-label">{icon.title}</div>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 0
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>💾</div>
        <h1>Portfolio de Timao Gourdais</h1>
        <p style={{ fontSize: '16px', marginTop: '10px' }}>Double-cliquez sur les icônes pour commencer</p>
      </div>
    </div>
  )
}

export default Desktop

