import { useState } from 'react'
const EMOJIS=['😀','😂','😍','👍','🔥','✨','🎉','💡','✅','🔒','📌']
export default function EmojiPicker(){
  const [q,setQ]=useState('')
  const filtered = EMOJIS.filter(e=>e.includes(q) || q==='')
  return (
    <div className="p-6">
      <h2 className="text-2xl">Emoji Picker</h2>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="filter" className="border p-1 mt-2" />
      <div className="mt-4 flex gap-2 flex-wrap">
        {filtered.map((e,i)=>(<button key={i} onClick={()=>navigator.clipboard.writeText(e)} className="p-2 bg-white border rounded">{e}</button>))}
      </div>
    </div>
  )
}
