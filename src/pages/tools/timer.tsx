import { useEffect, useState } from 'react'
export default function Timer(){
  const [sec,setSec]=useState(0)
  const [running,setRunning]=useState(false)
  useEffect(()=>{
    if(!running) return
    const id=setInterval(()=>setSec(s=>s+1),1000)
    return ()=>clearInterval(id)
  },[running])
  return (
    <div className="p-6">
      <h2 className="text-2xl">Timer</h2>
      <div className="mt-2 text-xl">{Math.floor(sec/60)}:{('0'+(sec%60)).slice(-2)}</div>
      <div className="mt-2">
        <button className="mr-2 px-3 py-1 bg-green-600 text-white rounded" onClick={()=>setRunning(true)}>Start</button>
        <button className="mr-2 px-3 py-1 bg-yellow-600 text-white rounded" onClick={()=>setRunning(false)}>Stop</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={()=>{setRunning(false); setSec(0)}}>Reset</button>
      </div>
    </div>
  )
}
