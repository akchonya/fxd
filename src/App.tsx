import { Bio } from './components/Bio'
import './App.css'

function App() {
  const bioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS"],
    description: "Passionate software developer with 5 years of experience building web applications. I love creating efficient, scalable solutions and contributing to open-source projects.",
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  }

  return (
    <div className="app">
      <Bio {...bioData} />
    </div>
  )
}

export default App
