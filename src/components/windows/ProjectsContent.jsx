const ProjectsContent = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Application e-commerce complète avec panier et paiement',
      tech: 'React, Node.js, MongoDB',
      icon: '🛒'
    },
    {
      name: 'Dashboard Analytics',
      description: 'Interface d\'administration avec graphiques interactifs',
      tech: 'Vue.js, D3.js, Firebase',
      icon: '📊'
    },
    {
      name: 'Social Media App',
      description: 'Application sociale avec chat en temps réel',
      tech: 'React Native, Socket.io',
      icon: '💬'
    }
  ]

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>📁 Mes Projets</h2>

      <div className="tree-view">
        <ul>
          <li>
            📂 Mes Projets
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <details>
                    <summary>{project.icon} {project.name}</summary>
                    <div style={{ 
                      padding: '10px', 
                      background: '#fff', 
                      border: '1px solid #000',
                      marginTop: '5px'
                    }}>
                      <p><strong>Description:</strong> {project.description}</p>
                      <p><strong>Technologies:</strong> {project.tech}</p>
                      <div className="field-row" style={{ marginTop: '10px' }}>
                        <button>🔗 Demo</button>
                        <button>💻 Code</button>
                      </div>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <fieldset>
          <legend>Statistiques</legend>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ textAlign: 'center', padding: '10px', border: '1px solid #000' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5+</div>
              <div>Projets Réalisés</div>
            </div>
            <div style={{ textAlign: 'center', padding: '10px', border: '1px solid #000' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>10+</div>
              <div>Technologies</div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="field-row" style={{ marginTop: '20px', justifyContent: 'center' }}>
        <button>📂 Voir tous les projets</button>
      </div>
    </div>
  )
}

export default ProjectsContent

