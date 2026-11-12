import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Orange circular arrow indicator used on image cards (decorative; the parent link carries the label). */
export function ArrowCircle({ className, tone = 'orange' }: { className?: string; tone?: 'orange' | 'white' }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-11 items-center justify-center rounded-full transition-colors duration-300',
        tone === 'orange' ? 'bg-orange text-white' : 'bg-white text-ink',
        className,
      )}
    >
      <ArrowUpRight className="size-5" strokeWidth={2} />
    </span>
  )
}
