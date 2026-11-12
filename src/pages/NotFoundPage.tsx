import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." path="/404" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+4rem)] pb-24">
        <div className="container-x max-w-2xl text-center">
          <p className="eyebrow text-orange">404</p>
          <h1 className="display-xl mt-5 text-ink">Page not found</h1>
          <p className="lede mt-6 text-stone">The page you were looking for has moved or does not exist.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" arrow>
              Back to home
            </Button>
            <Button to="/find-a-job" variant="outline">
              Find a Job
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
