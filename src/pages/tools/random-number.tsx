import { useState } from 'react'
export default function RandomNumber(){
  const [min,setMin]=useState(1)
  const [max,setMax]=useState(100)
  const [res,setRes]=useState<number|null>(null)
  const gen=()=>{
    const range = max-min+1
    const arr = new Uint32Array(1)
    window.crypto.getRandomValues(arr)
    const v = min + (arr[0] % range)
    setRes(v)
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl">Random Number</h2>
      <div className="flex gap-2 items-center mt-2">
        <input type="number" value={min} onChange={e=>setMin(parseInt(e.target.value||'0'))} className="border p-1" />
        <span>—</span>
        <input type="number" value={max} onChange={e=>setMax(parseInt(e.target.value||'0'))} className="border p-1" />
        <button onClick={gen} className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Generate</button>
      </div>
      {res!==null && <div className="mt-4 text-xl">Result: {res}</div>}
    </div>
  )
}
