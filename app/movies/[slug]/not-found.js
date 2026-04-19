"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").pop();

    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-10">
            {/* <!-- 404 GRAPHIC --> */}
            <div className="relative mb-8">
                <div className="font-display text-[140px] tracking-[4px] text-bg3 leading-none">404</div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        className="w-16 h-16 text-brand opacity-70">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                    </svg>
                </div>
            </div>

            {/* <!-- TEXT --> */}
            <h1 className="font-display text-3xl tracking-wide mb-2">Movie not found</h1>

            <p className="text-sm text-muted max-w-[380px] leading-relaxed mb-6">
                This movie with
                <span className="font-mono text-[13px] bg-bg3 border border-border px-2 py-0.5 rounded text-brand">
                    {slug}
                </span>
                was not found!<br />
                It may have been deleted or the slug is incorrect.
            </p>

            {/* <!-- BUTTONS --> */}
            <div className="flex gap-2 flex-wrap justify-center">
                <Link href={'/'}
                    className="flex items-center gap-2 text-sm px-5 py-2 rounded-lg bg-primary border border-primary text-white font-medium hover:bg-[#d03a26]">
                    → Back to home
                </Link>

                <Link href={'/movies'}
                    className="flex items-center gap-2 text-sm px-5 py-2 rounded-lg border border-borderHover hover:bg-bg3">
                    ← Go back
                </Link>
            </div>
        </div>
    )
}

export default NotFound