import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Download, ArrowRight } from 'lucide-react'

const INSTALL_URL = 'https://apps.shopify.com/store-clone'

export const CallToAction = () => {
    return (
        <section id="cta">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-5xl">
                        Ready to Clone Your <span className="text-emerald-500">Store?</span>
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg">Join merchants who&apos;ve already saved hours of manual work. Install free and start migrating in minutes.</p>
                    <div className="mt-10">
                        <Button
                            asChild
                            size="lg"
                            className="group border-transparent bg-emerald-500 hover:bg-emerald-600 px-8 text-base shadow-xl shadow-emerald-950/30">
                            <Link href={INSTALL_URL} target="_blank" rel="noopener">
                                <Download className="mr-2 size-5" />
                                Install Store Clone — Free
                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
