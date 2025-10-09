# Portfolio React - Timao Gourdais

Portfolio moderne et interactif développé avec React, Vite et une multitude de bibliothèques d'animations.

## 🚀 Technologies Utilisées

### Core
- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first

### Animations & Interactions
- **Framer Motion** - Animations fluides et performantes
- **AOS (Animate On Scroll)** - Animations au scroll
- **GSAP** - Animations avancées
- **React Spring** - Animations physiques
- **React Type Animation** - Effet de machine à écrire
- **Lottie React** - Animations Lottie

### 3D & Visuel
- **Three.js** - Rendu 3D
- **@react-three/fiber** - React renderer pour Three.js
- **@react-three/drei** - Helpers pour React Three Fiber

### UI Components & Utils
- **React Router DOM** - Navigation
- **React Scroll** - Smooth scrolling
- **React Intersection Observer** - Détection de visibilité
- **React Icons** - Bibliothèque d'icônes
- **Lucide React** - Icônes modernes
- **Swiper** - Slider/Carousel
- **React Parallax** - Effets parallaxe
- **React Responsive** - Media queries en React
- **React Helmet Async** - Gestion du HEAD

### Utilities
- **Axios** - HTTP client
- **EmailJS** - Service d'envoi d'emails

## 📁 Structure du Projet

```
portfolio-timao-react/
├── public/
│   └── Image/              # Dossier d'images
├── src/
│   ├── components/         # Composants React
│   │   ├── Navbar.jsx     # Barre de navigation
│   │   ├── Hero.jsx       # Section héro
│   │   ├── About.jsx      # Section à propos
│   │   ├── Skills.jsx     # Section compétences
│   │   ├── Projects.jsx   # Section projets
│   │   ├── Contact.jsx    # Section contact
│   │   └── Footer.jsx     # Pied de page
│   ├── App.jsx            # Composant principal
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── index.html             # HTML de base
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
├── postcss.config.js      # Configuration PostCSS
└── package.json           # Dépendances

## 🛠️ Installation

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 🚀 Démarrage

### Mode développement

```bash
npm run dev
```

Le site sera accessible à `http://localhost:3000`

### Build pour production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 🎨 Fonctionnalités

### Design
- ✅ Design moderne et épuré
- ✅ Thème sombre/clair
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Glassmorphism effects
- ✅ Gradient animations
- ✅ Smooth scrolling

### Animations
- ✅ Animations au scroll (AOS)
- ✅ Animations de transition (Framer Motion)
- ✅ Effet typing
- ✅ Hover effects
- ✅ Progress bars animées
- ✅ Floating elements

### Sections
- ✅ **Hero** - Section d'accueil avec animations
- ✅ **About** - Présentation personnelle
- ✅ **Skills** - Compétences techniques
- ✅ **Projects** - Portfolio de projets
- ✅ **Contact** - Formulaire de contact
- ✅ **Footer** - Liens sociaux

### Fonctionnalités
- ✅ Navigation responsive
- ✅ Menu mobile
- ✅ Smooth scroll vers sections
- ✅ Formulaire de contact
- ✅ Liens vers réseaux sociaux
- ✅ Mode sombre/clair
- ✅ Optimisation SEO

## 🎯 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` pour changer la palette de couleurs :

```javascript
theme: {
  extend: {
    colors: {
      primary: {...}
    }
  }
}
```

### Ajouter du contenu

Modifiez les composants dans `src/components/` pour personnaliser le contenu.

### Changer les animations

Ajustez les paramètres dans `src/main.jsx` pour AOS ou directement dans les composants pour Framer Motion.

## 📦 Build & Déploiement

### Build optimisé

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`.

### Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé pour React)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 🔧 Configuration

### Vite
Configuration dans `vite.config.js` :
- Port de développement : 3000
- Auto-open dans le navigateur
- Source maps pour le debug

### Tailwind CSS
Configuration dans `tailwind.config.js` :
- Couleurs personnalisées
- Animations custom
- Police de caractères

## 📝 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Créer le build de production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Vérifier le code avec ESLint

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT © Timao Gourdais

## 📞 Contact

- **Email** : contact@exemple.com
- **GitHub** : [@timao-gourdais](https://github.com/timao-gourdais)
- **LinkedIn** : [Timao Gourdais](https://linkedin.com)

---

Fait avec ❤️ et React
