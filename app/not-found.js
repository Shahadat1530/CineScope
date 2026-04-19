import Link from "next/link"

const NotFound = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-6 py-12 text-center">

            {/* <!-- Film Strip --> */}
            <div className="flex gap-[3px] mb-8 opacity-20">
                <div className="w-7 h-10 border border-white rounded-sm flex items-center justify-center">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-white">
                        <rect x="1" y="1" width="8" height="8" />
                    </svg>
                </div>
                <div className="w-7 h-10 bg-white"></div>
                <div className="w-7 h-10 border border-white rounded-sm flex items-center justify-center">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-white">
                        <rect x="1" y="1" width="8" height="8" />
                    </svg>
                </div>
                <div className="w-7 h-10 bg-white"></div>

                {/* <!-- Broken frame --> */}
                <div className="w-7 h-10 border border-redBrand opacity-60 relative flex items-center justify-center">
                    <span className="absolute text-redBrand text-lg">✕</span>
                </div>

                <div className="w-7 h-10 bg-white opacity-30"></div>
                <div className="w-7 h-10 border border-white opacity-30"></div>
            </div>

            {/* <!-- 404 --> */}
            <div
                className="font-display text-[200px] leading-none tracking-[8px] mb-6 bg-gradient-to-b from-white/10 to-white/5 bg-clip-text text-transparent">
                404
            </div>

            {/* <!-- Labels --> */}
            <div className="font-mono text-[11px] text-brand uppercase tracking-widest mb-2">
                Scene not found
            </div>

            <h1 className="font-display text-[28px] tracking-wide mb-2">
                This page does not exist
            </h1>

            <p className="text-sm text-muted max-w-xs leading-relaxed mb-7">
                The route you are looking for has been cut from the film. Head back to the homepage to find something worth
                watching.
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
                <Link href={'/'}
                    className="flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-lg border border-brand bg-brand text-white font-medium hover:bg-[#d03a26] transition">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.5]">
                        <path d="M3 8h10M8 3l5 5-5 5" />
                    </svg>
                    Go to homepage
                </Link>
            </div>

            {/* <!-- Footer Text --> */}
            <div className="flex items-center gap-2 mt-8 font-mono text-[11px] text-muted2">
                <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>
                Error 404 · Page not found · CineScope
            </div>

        </div>
    )
}

export default NotFound