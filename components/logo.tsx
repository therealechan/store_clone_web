/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <img
                src="https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/icon/CKLi_paU9IoDEAE=.png"
                alt="Store Clone"
                className="h-7 w-7 rounded-lg"
            />
            <span className="text-foreground text-lg font-bold">Store Clone</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/icon/CKLi_paU9IoDEAE=.png"
            alt="Store Clone"
            className={cn('size-7 rounded-lg', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <img
            src="https://cdn.shopify.com/app-store/listing_images/f7306f8e3904167213392a9a99fd1751/icon/CKLi_paU9IoDEAE=.png"
            alt="Store Clone"
            className={cn('size-7 rounded-lg', className)}
        />
    )
}
