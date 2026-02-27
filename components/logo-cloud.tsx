import { Container } from '@/components/container'
import { Tag, Zap, ShieldCheck, Store } from 'lucide-react'

export const LogoCloud = () => {
    const stats = [
        { icon: Tag, label: 'Free', sublabel: 'No hidden costs' },
        { icon: Zap, label: '< 5 min', sublabel: 'Average migration' },
        { icon: ShieldCheck, label: 'Secure', sublabel: 'OAuth authentication' },
        { icon: Store, label: 'Shopify', sublabel: 'Official App Store' },
    ]

    return (
        <Container className="**:data-[slot=content]:py-0">
            <div className="border-foreground/5 border-t py-8">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3">
                            <stat.icon className="size-5 text-emerald-500" />
                            <div>
                                <div className="text-foreground text-lg font-bold">{stat.label}</div>
                                <div className="text-muted-foreground text-xs">{stat.sublabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
