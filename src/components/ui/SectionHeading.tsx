import { cn } from '../../lib/cn'

type Props = {
  eyebrow?: string
  title: string
  body?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, body, align = 'center', tone = 'light', className, as: Tag = 'h2' }: Props) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && <p className={cn('eyebrow mb-4', align === 'left' && 'eyebrow-rule', dark ? 'text-orange' : 'text-orange')}>{eyebrow}</p>}
      <Tag className={cn('display-lg', dark ? 'text-white' : 'text-ink')}>{title}</Tag>
      {body && <p className={cn('lede mt-5', dark ? 'text-white/75' : 'text-stone')}>{body}</p>}
    </div>
  )
}
