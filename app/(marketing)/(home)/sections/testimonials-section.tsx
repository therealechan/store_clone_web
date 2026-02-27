import { Container } from '@/components/container'
import { Star, Quote } from 'lucide-react'

export const TestimonialsSection = () => {
    return (
        <section id="testimonials">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/30 p-8 text-center dark:border-emerald-900/30 dark:bg-emerald-950/10 md:p-12">
                        <Quote className="mx-auto mb-6 size-10 text-emerald-300" />
                        <blockquote className="text-foreground/80 text-lg leading-relaxed md:text-xl">
                            &ldquo;This is the only app I found that could handle this task with such ease and efficiency. Not only does it transfer all product details seamlessly, but it also supports the migration of metafields, which is a huge plus for maintaining my store&apos;s data integrity. One standout feature is the ability to filter products by Markets country, allowing for a tailored migration process. This has saved me a tremendous amount of time and effort.&rdquo;
                        </blockquote>
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <div className="flex items-center gap-1 text-emerald-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="size-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-muted-foreground text-sm">Verified Shopify Merchant</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
