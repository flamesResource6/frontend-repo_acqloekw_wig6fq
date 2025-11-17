import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ItemsSection, StaffSection, VoteSection, EventsSection, BlogSection, ApplySection, StatsSection, VoteBanner } from './components/Sections'

function App() {
  const [page, setPage] = useState('home')

  const PageEl = useMemo(() => {
    switch(page){
      case 'items': return <ItemsSection />
      case 'staff': return <StaffSection />
      case 'vote': return <VoteSection />
      case 'events': return <EventsSection />
      case 'blog': return <BlogSection />
      case 'apply': return <ApplySection />
      case 'stats': return <StatsSection />
      case 'dashboard': return <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-gray-600">Staff dashboard coming soon.</div>
      default: return (
        <>
          <Hero onStore={() => window.open('https://store.ezbuilds.net', '_blank')} />
          <VoteBanner />
        </>
      )
    }
  }, [page])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      <Navbar active={page} onNavigate={setPage} />
      {PageEl}
      <footer className="mt-20 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EZBuilds • Citybuild • Store via Tebex
      </footer>
    </div>
  )
}

export default App
