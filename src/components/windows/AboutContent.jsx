const AboutContent = () => {
  return (
    <div>
      <div className="field-row-stacked" style={{ marginBottom: '20px' }}>
        <h2>👋 Bonjour !</h2>
      </div>

      <div className="field-row-stacked" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <img 
          src="/Image/Photo de profil.jfif" 
          alt="Timao Gourdais"
          style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '4px',
            border: '2px solid #000',
            imageRendering: 'pixelated'
          }}
        />
      </div>

      <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
        <label><strong>Nom:</strong></label>
        <input type="text" value="Timao Gourdais" readOnly />
      </div>

      <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
        <label><strong>Profession:</strong></label>
        <input type="text" value="Développeur Web Full Stack" readOnly />
      </div>

      <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
        <label><strong>Spécialisation:</strong></label>
        <input type="text" value="React, JavaScript, UI/UX" readOnly />
      </div>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #000', background: '#fff' }}>
        <p style={{ margin: '0 0 10px 0' }}>
          💻 Passionné par le développement web et la création d'expériences utilisateur innovantes.
        </p>
        <p style={{ margin: '0 0 10px 0' }}>
          🎯 Mon expertise couvre le développement front-end avec React, ainsi que les technologies back-end pour créer des applications web complètes.
        </p>
        <p style={{ margin: '0' }}>
          🚀 Je transforme les idées en réalité digitale exceptionnelle.
        </p>
      </div>

      <div className="field-row" style={{ marginTop: '20px', justifyContent: 'center' }}>
        <button>📄 Télécharger CV</button>
        <button>🔗 LinkedIn</button>
        <button>💻 GitHub</button>
      </div>
    </div>
  )
}

export default AboutContent

