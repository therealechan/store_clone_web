import { Container } from '@/components/container'
import { Database, Shield, Clock, UserCheck, Cookie, FileEdit, Mail, Share2, Settings } from 'lucide-react'

export const metadata = {
    title: 'Privacy Policy - Store Clone',
    description: 'Privacy Policy for Store Clone ‑ Easy Migration Shopify App by Magicbean Co., Ltd.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="mb-12">
                        <h1 className="text-foreground text-3xl font-bold md:text-4xl">Privacy Policy</h1>
                        <p className="text-muted-foreground mt-2 text-sm">Last updated: February 27, 2026</p>
                    </div>

                    <div className="text-muted-foreground space-y-10 leading-relaxed">
                        <section>
                            <p>This Privacy Policy describes how Magicbean Co., Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares information in connection with the Store Clone ‑ Easy Migration application (&ldquo;App&rdquo;) available on the Shopify App Store. By installing and using the App, you agree to the practices described in this policy.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Database className="size-5 text-emerald-500" /> Information We Collect
                            </h2>
                            <p className="mb-4">When you install and use Store Clone, we access and process the following types of data from your Shopify store(s):</p>
                            <ul className="ml-1 space-y-3">
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Product Data</span> — Product titles, descriptions, images, variants, pricing, inventory levels, tags, and associated metafields.</li>
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Collection Data</span> — Collection titles, descriptions, images, and product associations.</li>
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Customer Data</span> — Customer names, email addresses, shipping addresses, and order history as needed for migration.</li>
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Metafield Data</span> — Custom metafields attached to products, collections, customers, and other resources.</li>
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Inventory Data</span> — Stock levels, locations, and inventory tracking settings.</li>
                                <li className="flex items-start gap-3"><span className="text-foreground font-medium">Store Information</span> — Store name, domain, and configuration settings required for authentication and migration.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Settings className="size-5 text-emerald-500" /> How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the information collected solely for the following purposes:</p>
                            <ul className="ml-1 space-y-2">
                                <li><span className="text-foreground font-medium">Store Migration</span> — To duplicate and transfer your store data as directed by you.</li>
                                <li><span className="text-foreground font-medium">Data Synchronization</span> — To keep your stores synchronized through auto-sync features when enabled.</li>
                                <li><span className="text-foreground font-medium">App Functionality</span> — To provide filtering, selection, and migration management features.</li>
                                <li><span className="text-foreground font-medium">Support</span> — To assist you with technical issues and customer support requests.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Share2 className="size-5 text-emerald-500" /> Data Sharing and Disclosure
                            </h2>
                            <p className="mb-4">We do not sell, rent, or trade your personal information or store data to third parties.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Shield className="size-5 text-emerald-500" /> Data Security
                            </h2>
                            <p>We implement industry-standard security measures to protect your data. All connections to Shopify are made through secure OAuth authentication and encrypted API channels.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Clock className="size-5 text-emerald-500" /> Data Retention
                            </h2>
                            <p>We retain your store data only for as long as necessary to provide the migration and synchronization services. When you uninstall the App, we delete all associated data within 30 days.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <UserCheck className="size-5 text-emerald-500" /> Your Rights
                            </h2>
                            <p>You may access, correct, or delete your personal information. For GDPR, CCPA, or other privacy-related requests, please contact us using the information below.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Cookie className="size-5 text-emerald-500" /> Cookies and Tracking
                            </h2>
                            <p>The App itself does not use cookies or tracking technologies. Please refer to <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700">Shopify&apos;s Privacy Policy</a> for details on their data practices.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <FileEdit className="size-5 text-emerald-500" /> Changes to This Policy
                            </h2>
                            <p>We may update this Privacy Policy from time to time. Your continued use of the App after changes constitutes acceptance of the updated policy.</p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-semibold">
                                <Mail className="size-5 text-emerald-500" /> Contact Us
                            </h2>
                            <div className="bg-card rounded-xl border p-6">
                                <p className="text-foreground font-semibold">Magicbean Co., Ltd</p>
                                <p className="text-muted-foreground mt-1 text-sm">Room 720, 7th Floor, Star House</p>
                                <p className="text-muted-foreground text-sm">No. 3 Salisbury Road, Tsimshatsui, Kowloon</p>
                                <p className="text-muted-foreground text-sm">Hong Kong</p>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}
