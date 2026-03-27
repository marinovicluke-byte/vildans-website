import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function AuthorBox() {
  return (
    <div className="border-t border-border-subtle pt-8 mt-12">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-bg-secondary flex-shrink-0" />
        <div>
          <p className="font-heading font-semibold text-text-primary">{siteConfig.practitioner.fullName}</p>
          <p className="text-text-secondary text-sm mb-2">{siteConfig.practitioner.role}</p>
          <p className="text-text-secondary text-sm leading-relaxed max-w-[50ch]">
            PKP-qualified kinesiologist in Moorabbin, Melbourne. Working with adults carrying
            stress, anxiety, and tension their body won&rsquo;t let go of.
          </p>
          <Link href="/about" className="text-sm text-accent hover:text-accent-hover transition-colors duration-base mt-2 inline-block">
            About Vildan
          </Link>
        </div>
      </div>
    </div>
  );
}
