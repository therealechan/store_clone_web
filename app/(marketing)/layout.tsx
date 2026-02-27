import type { Metadata } from 'next'
import Header from '@/components/header'
import FooterSection from '@/components/footer'

export const metadata: Metadata = {
    title: 'Store Clone - Clone Your Shopify Store in Minutes',
    description: 'Automate your Shopify store duplication. Migrate products, customers, metafields, and more with one click. Free on the Shopify App Store.',
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main
                role="main"
                className="bg-background">
                {children}
            </main>
            <FooterSection />
        </>
    )
}
