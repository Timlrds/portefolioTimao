import { useState } from 'react'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message envoyé ! ✅')
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>📧 Contactez-moi</h2>

      <form onSubmit={handleSubmit}>
        <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Nom:</label>
          <input 
            id="name"
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="votre@email.com"
            required
          />
        </div>

        <div className="field-row-stacked" style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows="5"
            placeholder="Votre message..."
            required
          />
        </div>

        <div className="field-row" style={{ justifyContent: 'center' }}>
          <button type="submit">📤 Envoyer</button>
          <button type="reset" onClick={() => setFormData({ name: '', email: '', message: '' })}>
            🗑️ Effacer
          </button>
        </div>
      </form>

      {status && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: '#c3ffc3', 
          border: '1px solid #00aa00',
          textAlign: 'center'
        }}>
          {status}
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <fieldset>
          <legend>Informations de Contact</legend>
          <div style={{ lineHeight: '1.8' }}>
            <div>📧 <strong>Email:</strong> contact@exemple.com</div>
            <div>📱 <strong>Téléphone:</strong> +33 6 12 34 56 78</div>
            <div>📍 <strong>Localisation:</strong> Paris, France</div>
            <div>💼 <strong>LinkedIn:</strong> /timao-gourdais</div>
            <div>💻 <strong>GitHub:</strong> @timao-gourdais</div>
          </div>
        </fieldset>
      </div>

      <div className="field-row" style={{ marginTop: '20px', justifyContent: 'center' }}>
        <button>🔗 LinkedIn</button>
        <button>💻 GitHub</button>
        <button>📧 Email</button>
      </div>
    </div>
  )
}

export default ContactContent

