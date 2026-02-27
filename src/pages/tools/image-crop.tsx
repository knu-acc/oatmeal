import { useRef, useState } from 'react'

export default function ImageCrop(){
  const inputRef = useRef<HTMLInputElement|null>(null)
  const [src,setSrc]=useState<string| null>(null)
  const onFile = (e:any)=>{
    const f = e.target.files?.[0]
    if(!f) return
    const reader = new FileReader();
    reader.onload = ()=> setSrc(reader.result as string)
    reader.readAsDataURL(f)
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl">Image Crop (client-side)</h2>
      <input ref={inputRef} type="file" accept="image/*" onChange={onFile} />
      {src && <div className="mt-4">
        <img src={src} alt="preview" style={{maxWidth:400}} />
      </div>}
    </div>
  )
}
