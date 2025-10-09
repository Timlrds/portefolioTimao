const SkillsContent = () => {
  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Git & GitHub', level: 85 }
  ]

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>💻 Mes Compétences Techniques</h2>

      <div className="tabs">
        <menu role="tablist" aria-label="Skills Tabs">
          <li role="tab" aria-selected="true" aria-controls="tab-A">
            <a href="#frontend">Frontend</a>
          </li>
          <li role="tab" aria-controls="tab-B">
            <a href="#backend">Backend</a>
          </li>
          <li role="tab" aria-controls="tab-C">
            <a href="#tools">Outils</a>
          </li>
        </menu>

        <article role="tabpanel" id="tab-A">
          <h3>🎨 Frontend Development</h3>
          <ul>
            <li>React & Next.js</li>
            <li>Vue.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Responsive Design</li>
          </ul>
        </article>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '15px' }}>📊 Niveaux de Compétences</h3>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              {skill.name}: {skill.level}%
            </label>
            <progress 
              value={skill.level} 
              max="100" 
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #000', background: '#fff' }}>
        <p style={{ margin: 0 }}>
          ℹ️ <strong>Note:</strong> Ces compétences sont constamment mises à jour et améliorées grâce à l'apprentissage continu et la pratique sur des projets réels.
        </p>
      </div>
    </div>
  )
}

export default SkillsContent

