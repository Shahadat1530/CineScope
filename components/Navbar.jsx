import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur bg-bg/90 border-b border-white/10 h-14 flex items-center justify-between px-6">

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center text-white text-sm">
          ▦
        </div>
        <span className="font-display text-xl tracking-wide">CineScope</span>
      </div>

      <div className="flex gap-2 text-sm">
        <Link href={'/'} className="px-3 py-1 text-gray-400 hover:text-white">Home</Link>
        <Link href={'/movies'} className="px-3 py-1 text-gray-400 hover:text-white">Movies</Link>
      </div>

    </nav>
  )
}
