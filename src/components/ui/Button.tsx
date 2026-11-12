import { ArrowRight } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'outline' | 'outline-light' | 'ghost' | 'dark' | 'white'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none'

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-white hover:bg-orange-deep',
  outline: 'border border-ink/80 text-ink hover:bg-ink hover:text-white',
  'outline-light': 'border border-white/80 text-white hover:bg-white hover:text-ink',
  ghost: 'text-ink hover:text-orange px-0',
  dark: 'bg-ink text-white hover:bg-charcoal-2',
  white: 'bg-white text-ink hover:bg-ink hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-6 text-[0.9375rem]',
  lg: 'min-h-13 px-8 text-base',
}

type Common = { variant?: Variant; size?: Size; arrow?: boolean; className?: string; children: ReactNode }
type LinkButtonProps = Common & { to: string; external?: boolean } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>
type NativeButtonProps = Common & { to?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>

export type ButtonProps = LinkButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', arrow = false, className, children } = props
  const classes = cn(base, variants[variant], sizes[size], arrow && 'arrow-nudge', className)
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="size-4.5 shrink-0" strokeWidth={2} aria-hidden="true" />}
    </>
  )

  if (props.to !== undefined) {
    const { to, external, variant: _v, size: _s, arrow: _a, className: _c, children: _ch, ...rest } = props
    if (external || /^(https?:|mailto:|tel:)/.test(to)) {
      return (
        <a href={to} className={classes} target={/^https?:/.test(to) ? '_blank' : undefined} rel={/^https?:/.test(to) ? 'noreferrer' : undefined} {...rest}>
          {content}
        </a>
      )
    }
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  const { variant: _v, size: _s, arrow: _a, className: _c, children: _ch, type = 'button', ...rest } = props
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}
