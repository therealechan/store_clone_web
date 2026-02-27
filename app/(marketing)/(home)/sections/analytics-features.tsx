/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/container'
import { Link, ListChecks, Rocket } from 'lucide-react'

const steps = [
    {
        icon: Link,
        step: 'Step 1',
        title: 'Connect',
        description: 'Install the app and authenticate your source and destination Shopify stores with one click.',
    },
    {
        icon: ListChecks,
        step: 'Step 2',
        title: 'Select',
        description: 'Choose what to migrate — products, customers, metafields, collections. Apply filters to fine-tune your selection.',
    },
    {
        icon: Rocket,
        step: 'Step 3',
        title: 'Clone',
        description: 'Hit start and watch your store get duplicated automatically. Set up sync rules for ongoing updates.',
    },
]

const screenshots = [
    {
        src: 'https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/desktop_screenshot/COGLoOT_iIsDEAE=.png',
        alt: 'Duplicate In Minutes',
    },
    {
        src: 'https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/desktop_screenshot/CKi4pbT-iIsDEAE=.png',
        alt: 'Easy Store Connection',
    },
    {
        src: 'https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/desktop_screenshot/CMmwq-T_iIsDEAE=.png',
        alt: 'Comprehensive Data Support',
    },
]

export const AnalyticsFeatures = () => {
    return (
        <section id="how-it-works">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-4xl">
                        Three Steps. <span className="text-emerald-500">That&apos;s It.</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">From install to migrated store in under five minutes.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.title} className="text-center">
                            <div className="mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30">
                                <step.icon className="size-7 text-emerald-500" />
                            </div>
                            <div className="mb-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">{step.step}</div>
                            <h3 className="text-foreground text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground mx-auto mt-2 max-w-xs text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Screenshots */}
                <div className="mt-16">
                    <h3 className="text-foreground mb-8 text-center text-2xl font-semibold">
                        See It <span className="text-emerald-500">In Action</span>
                    </h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        {screenshots.map((shot) => (
                            <div key={shot.alt} className="group overflow-hidden rounded-xl border transition-shadow hover:shadow-lg">
                                <img
                                    src={shot.src}
                                    alt={shot.alt}
                                    className="w-full transition-transform group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                                <div className="bg-card p-3 text-center text-sm font-medium">{shot.alt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
