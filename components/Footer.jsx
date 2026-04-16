const Footer = () => {
    return (
        <footer className="border-t border-white/10 px-6 py-6 bg-bg2 flex flex-wrap justify-between items-center gap-4">

            <div className="flex items-center gap-2 font-display text-lg">
                <div className="w-6 h-6 bg-brand rounded"></div>
                CineScope
            </div>

            <p className="text-xs text-gray-500 font-mono">
                © 2026 CineScope
            </p>

        </footer>
    )
}

export default Footer