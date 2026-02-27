import { Container } from '@/components/container'
import { MousePointerClick, Package, RefreshCw, Filter } from 'lucide-react'

const features = [
    {
        icon: MousePointerClick,
        title: 'One-Click Connect',
        description: 'Secure instant store authentication with OAuth. Connect your source and target stores in seconds — no complex setup required.',
    },
    {
        icon: Package,
        title: 'Smart Migration',
        description: 'Select exactly what to migrate — products, customers, collections, metafields. Full control over your data transfer with granular selection.',
    },
    {
        icon: RefreshCw,
        title: 'Auto-Sync',
        description: 'Keep stores synchronized with real-time, scheduled, or two-way sync. Inventory and pricing always stay up to date across all stores.',
    },
    {
        icon: Filter,
        title: 'Advanced Filtering',
        description: 'Filter by Markets country, product type, or custom rules. Tailor your migration to specific geographic or business needs.',
    },
]

export const PlatformFeatures = () => {
    return (
        <section id="features">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-4xl">
                        Everything You Need to <span className="text-emerald-500">Migrate</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">Powerful features designed for seamless multi-store management.</p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-card hover:border-emerald-200 dark:hover:border-emerald-800 group rounded-2xl border p-6 transition-colors">
                            <div className="mb-5 w-fit rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30">
                                <feature.icon className="size-7 text-emerald-500" />
                            </div>
                            <h3 className="text-foreground text-lg font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
