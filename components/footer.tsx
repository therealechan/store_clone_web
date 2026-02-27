/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Container } from '@/components/container'

const INSTALL_URL = 'https://apps.shopify.com/store-clone'

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Testimonials', href: '#testimonials' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Shopify App Store', href: INSTALL_URL },
    ],
}

export default function FooterSection() {
    return (
        <footer className="border-t">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/icon/CKLi_paU9IoDEAE=.png"
                            alt="Store Clone"
                            className="size-6 rounded-md"
                        />
                        <span className="text-muted-foreground text-sm">Store Clone by Magicbean Co., Ltd</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        {[...footerLinks.product, ...footerLinks.legal].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                                className="text-muted-foreground hover:text-foreground transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
