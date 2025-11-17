import { useEffect, useState } from 'react'
import { Search, ChevronRight, ExternalLink } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export function ItemsSection() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    fetch(`${API}/items${q ? `?q=${encodeURIComponent(q)}` : ''}`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [q])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Item Prices</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search items" className="pl-9 pr-3 py-2 rounded-md border w-64"/>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(it => (
          <div key={it.id} className="p-4 rounded-lg bg-white shadow border">
            <div className="font-semibold">{it.name}</div>
            {it.category && <div className="text-xs text-gray-500">{it.category}</div>}
            <div className="mt-2 text-indigo-600 font-bold">{it.price.toLocaleString()} $</div>
          </div>
        ))}
        {items.length === 0 && <div className="text-gray-500">No items found.</div>}
      </div>
    </section>
  )
}

export function StaffSection() {
  const [staff, setStaff] = useState([])
  useEffect(() => { fetch(`${API}/staff`).then(r=>r.json()).then(setStaff).catch(()=>setStaff([])) }, [])
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Staff Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {staff.map(m => (
          <div key={m.id} className="p-4 rounded-lg bg-white shadow border flex items-center gap-4">
            <img src={`https://mineskin.eu/helm/${encodeURIComponent(m.username)}/64.png`} alt={m.username} className="h-12 w-12 rounded"/>
            <div>
              <div className="font-semibold">{m.username}</div>
              <div className="text-xs text-gray-500">{m.role} • {m.team}</div>
            </div>
          </div>
        ))}
        {staff.length === 0 && <div className="text-gray-500">No staff yet.</div>}
      </div>
    </section>
  )
}

export function VoteSection() {
  const [links, setLinks] = useState([])
  useEffect(()=>{ fetch(`${API}/votes`).then(r=>r.json()).then(setLinks).catch(()=>setLinks([])) },[])
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Vote</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map(l => (
          <a key={l.id} href={l.url} target="_blank" className="p-4 rounded-lg bg-white shadow border hover:shadow-md transition">
            <div className="font-semibold">{l.name}</div>
            {l.description && <div className="text-sm text-gray-600 mt-1">{l.description}</div>}
          </a>
        ))}
        {links.length === 0 && <div className="text-gray-500">No vote links yet.</div>}
      </div>
    </section>
  )
}

export function EventsSection() {
  const [events, setEvents] = useState([])
  useEffect(()=>{ fetch(`${API}/events?active=true`).then(r=>r.json()).then(setEvents).catch(()=>setEvents([])) },[])
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Events</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(ev => (
          <div key={ev.id} className="p-4 rounded-lg bg-white shadow border">
            <div className="font-semibold">{ev.title}</div>
            <div className="text-sm text-gray-600 mt-1">{ev.description}</div>
            {ev.reward && <div className="mt-2 text-indigo-600 font-medium">Reward: {ev.reward}</div>}
          </div>
        ))}
        {events.length === 0 && <div className="text-gray-500">No events currently.</div>}
      </div>
    </section>
  )
}

export function BlogSection() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{ fetch(`${API}/blogs?published=true`).then(r=>r.json()).then(setPosts).catch(()=>setPosts([])) },[])
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(p => (
          <div key={p.id} className="p-4 rounded-lg bg-white shadow border">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-600 mt-1 line-clamp-3">{p.content}</div>
            <div className="mt-2 flex gap-1 flex-wrap">
              {(p.tags||[]).map(t => (
                <span key={t} className="px-2 py-0.5 text-xs rounded bg-indigo-50 text-indigo-700">#{t}</span>
              ))}
            </div>
          </div>
        ))}
        {posts.length === 0 && <div className="text-gray-500">No posts yet.</div>}
      </div>
    </section>
  )
}

export function ApplySection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Apply for a role</h2>
      <p className="text-gray-600 mb-6">Login with Discord to start your application.</p>
      <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
        <ChevronRight className="h-4 w-4"/> Login with Discord
      </a>
    </section>
  )
}

export function StatsSection() {
  const [summary, setSummary] = useState(null)
  const [players, setPlayers] = useState([])
  useEffect(()=>{
    fetch(`${API}/stats/summary`).then(r=>r.json()).then(setSummary).catch(()=>setSummary(null))
    fetch(`${API}/stats/players`).then(r=>r.json()).then(setPlayers).catch(()=>setPlayers([]))
  },[])
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Stats</h2>
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Online" value={summary.online_players}/>
          <StatCard label="Total" value={summary.total_players}/>
          <StatCard label="Money" value={summary.total_money}/>
          <StatCard label="TPS" value={summary.tps}/>
        </div>
      )}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-4 font-semibold border-b">Player Money</div>
        <ul>
          {players.map(p => (
            <li key={p.id} className="p-4 border-t flex items-center justify-between">
              <span>{p.username}</span>
              <span className="font-medium text-indigo-600">{p.money.toLocaleString()} $</span>
            </li>
          ))}
          {players.length === 0 && <li className="p-4 text-gray-500">No player stats yet.</li>}
        </ul>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow border text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

export function VoteBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="font-medium">Support the server by voting!</div>
        <a href="#vote" className="inline-flex items-center gap-1 underline">
          Go vote <ExternalLink className="h-4 w-4"/>
        </a>
      </div>
    </div>
  )
}
