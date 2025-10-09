import React from 'react'

const CVContent = () => {
  return (
    <div className="window-body">
      <div style={{ padding: '20px', height: '100%' }}>
        <h3 style={{ marginBottom: '20px', color: '#000080', textAlign: 'center' }}>
          📄 CV - Timao Gourdais
        </h3>
        
        {/* Simple content for testing */}
        <div style={{ 
          border: '2px inset #c0c0c0', 
          background: 'white',
          padding: '20px',
          marginBottom: '20px',
          height: '300px',
          overflow: 'auto'
        }}>
          <p><strong>CV de Timao Gourdais</strong></p>
          <p>Ceci est une version de test du CV.</p>
          <p>Si vous voyez ce message, la fenêtre fonctionne !</p>
          <p>Votre CV PDF se trouve dans : /Image/cv Gourdais Timao.pdf</p>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '10px',
          borderTop: '1px solid #c0c0c0',
          paddingTop: '10px'
        }}>
          <button 
            className="button"
            onClick={() => {
              window.open('/Image/cv Gourdais Timao.pdf', '_blank');
            }}
          >
            🔍 Ouvrir dans un nouvel onglet
          </button>
          
          <button 
            className="button"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Image/cv Gourdais Timao.pdf';
              link.download = 'cv Gourdais Timao.pdf';
              link.click();
            }}
          >
            💾 Télécharger CV
          </button>
          
          <button 
            className="button"
            onClick={() => {
              window.open('/Image/cv Gourdais Timao.pdf', '_blank');
              setTimeout(() => window.print(), 500);
            }}
          >
            🖨️ Imprimer
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
          💡 Double-cliquez sur le CV pour le faire défiler
        </div>
      </div>
    </div>
  )
}

export default CVContent
