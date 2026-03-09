"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about-me", label: "About Me" },
        { href: "/work-with-me", label: "Work With Me" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 p-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform">
                    Bhardwaj<span className="text-[var(--primary)]">Prasad</span>
                </Link>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-2 p-2 rounded-2xl neu-flat">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? "neu-pressed text-[var(--primary)] font-bold" : "hover:text-[var(--primary)] neu-btn"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-3 rounded-xl neu-btn flex items-center justify-center text-foreground w-12 h-12"
                        aria-label="Toggle Theme"
                    >
                        {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
