import Head from 'next/head'
import Link from 'next/link'
export default function Home(){
  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>PiliApp Clone — Tools</title>
        <meta name="description" content="Collection of handy web tools — image, text, random, timer." />
      </Head>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/tools/image-crop"><a className="p-4 border rounded bg-white dark:bg-gray-800">Image Crop</a></Link>
          <Link href="/tools/image-resize"><a className="p-4 border rounded bg-white dark:bg-gray-800">Image Resize</a></Link>
          <Link href="/tools/random-number"><a className="p-4 border rounded bg-white dark:bg-gray-800">Random Number</a></Link>
          <Link href="/tools/timer"><a className="p-4 border rounded bg-white dark:bg-gray-800">Timer</a></Link>
          <Link href="/tools/emoji-picker"><a className="p-4 border rounded bg-white dark:bg-gray-800">Emoji Picker</a></Link>
        </div>
      </main>
    </div>
  )
}
