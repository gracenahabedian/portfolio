import About from './ui/About';
import Education from './ui/Education';
import Experience from './ui/Experience';
import Home from './ui/Home';
import Projects from './ui/Projects';
import Skills from './ui/Skills';

export default function Page() {
  return (
    <main className='h-full w-full'>
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
