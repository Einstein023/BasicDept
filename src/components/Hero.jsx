export default function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-neutral px-6 pb-8 pt-16 text-primary md:px-[5.5rem] md:pb-10 md:pt-20">
      <div className="relative mx-auto min-h-[calc(100svh-7rem)] max-w-[1680px]">
        <div className="max-w-4xl">
          <h2 className="max-w-[52rem] text-2xl font-medium leading-[1.08] tracking-tight sm:text-4xl md:text-[1.85rem]">
            BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
          </h2>

          <div className="mt-14 md:mt-16">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-primary px-11 py-3 text-sm font-bold uppercase tracking-tight text-primary transition-colors duration-200 hover:bg-primary hover:text-neutral"
            >
              See The Work
            </a>
          </div>
        </div>

        <figure className="absolute bottom-0 right-0 w-[min(54vw,60rem)] max-md:relative max-md:mt-24 max-md:w-[88vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 307 100"
            className="h-auto w-full fill-current text-primary"
            aria-label="BASIC/DEPT logo"
          >
            <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1" />
          </svg>
        </figure>

      </div>
    </section>
    )
}