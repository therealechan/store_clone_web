'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Menu, X } from 'lucide-react'
import { useMedia } from '@/hooks/use-media'
import { cn } from '@/lib/utils'

const INSTALL_URL = 'https://apps.shopify.com/store-clone'

const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isLarge = useMedia('(min-width: 64rem)')

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const originalOverflow = document.body.style.overflow
        if (isMobileMenuOpen) document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = originalOverflow }
    }, [isMobileMenuOpen])

    return (
        <header
            role="banner"
            data-state={isMobileMenuOpen ? 'active' : 'inactive'}
            {...(isScrolled && { 'data-scrolled': true })}
            className="fixed inset-x-0 top-0 z-50">
            <div className={cn(
                'border-foreground/5 absolute inset-x-0 top-0 z-50 transition-all duration-300',
                'in-data-scrolled:border-b in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur',
                !isLarge && 'h-14 overflow-hidden border-b',
                isMobileMenuOpen && 'bg-background/75 h-screen backdrop-blur'
            )}>
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between lg:py-3">
                        <div className="max-lg:border-foreground/5 flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {isLarge && (
                            <div className="absolute inset-0 m-auto size-fit">
                                <nav className="flex items-center gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {!isLarge && isMobileMenuOpen && (
                            <nav className="w-full py-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="group relative block py-3 text-lg">
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        )}

                        <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href={INSTALL_URL} target="_blank" rel="noopener">Install Free</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
