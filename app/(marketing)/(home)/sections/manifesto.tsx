import { Container } from '@/components/container'
import { Clock, AlertTriangle, Bug, Repeat, Zap, Database, Shield, RefreshCw, XCircle, CheckCircle } from 'lucide-react'

export const Manifesto = () => {
    return (
        <section id="manifesto">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-4xl">
                        The Old Way vs. The <span className="text-emerald-500">Store Clone</span> Way
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">See why merchants are switching to automated store migration.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Old Way */}
                    <div className="rounded-2xl border border-red-200/50 bg-red-50/30 p-8 dark:border-red-900/30 dark:bg-red-950/10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="rounded-lg bg-red-100 p-2 dark:bg-red-900/30">
                                <XCircle className="size-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">Manual Migration</h3>
                        </div>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <Clock className="mt-0.5 size-5 shrink-0 text-red-400/60" />
                                <span>Hours of copying products, collections, and pages one by one</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-400/60" />
                                <span>Metafields and custom data lost in translation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Bug className="mt-0.5 size-5 shrink-0 text-red-400/60" />
                                <span>Human errors, missed settings, broken references</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Repeat className="mt-0.5 size-5 shrink-0 text-red-400/60" />
                                <span>Repeat the whole process for every new store</span>
                            </li>
                        </ul>
                    </div>
                    {/* Store Clone Way */}
                    <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/30 p-8 dark:border-emerald-900/30 dark:bg-emerald-950/10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900/30">
                                <CheckCircle className="size-6 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">With Store Clone</h3>
                        </div>
                        <ul className="space-y-4 text-foreground/80">
                            <li className="flex items-start gap-3">
                                <Zap className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                                <span>Complete store duplication in minutes, not hours</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Database className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                                <span>Full metafield support preserves data integrity</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Shield className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                                <span>Automated process eliminates human error</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <RefreshCw className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                                <span>Auto-sync keeps stores updated automatically</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
