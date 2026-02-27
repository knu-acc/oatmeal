import { useRef, useState } from 'react'
export default function ImageResize(){
  const [src,setSrc]=useState<string|null>(null)
  const onFile=(e:any)=>{
    const f=e.target.files?.[0]; if(!f) return; const r=new FileReader(); r.onload=()=>setSrc(r.result as string); r.readAsDataURL(f)
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl">Image Resize (client-side)</h2>
      <input type="file" accept="image/*" onChange={onFile} />
      {src && <img src={src} alt="preview" style={{maxWidth:400}}/>}
    </div>
  )
}
