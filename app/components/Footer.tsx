import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-slate-100 2xl:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-t py-8 border-slate-400">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full text-orange-400 h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm6 8v7h3v-6h2l-.25 6h2l-.25 6h2v-7l-3 1-3-1V8h-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-orange-500">
            Itzz
          </span>
        </Link>
        <div className="flex gap-3">
          <Link
            href="https://github.com/Itzz07/"
            target="blank"
            aria-label="github"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-zinc-600 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-500  hover:shadow-orange-600 shadow-md"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/joel-zimba-5325a8293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius]  text-zinc-600 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-500 hover:shadow-orange-600 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="https://twitter.com/rio_itzz"
            target="blank"
            aria-label="twitter"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-zinc-600 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-500  hover:shadow-orange-600 shadow-md"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/zimbajoel1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius]  text-zinc-600 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-500 hover:shadow-orange-600 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </Link>
          <Link
            href="mailto:zimbajoel1@gmail.com"
            aria-label="Email"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-zinc-600 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-500  hover:shadow-orange-600 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path d="M37.75,9 C40.6494949,9 43,11.3505051 43,14.25 L43,33.75 C43,36.6494949 40.6494949,39 37.75,39 L10.25,39 C7.35050506,39 5,36.6494949 5,33.75 L5,14.25 C5,11.3505051 7.35050506,9 10.25,9 L37.75,9 Z M40.5,18.351 L24.6023984,27.0952699 C24.2689733,27.2786537 23.8727436,27.2990297 23.5253619,27.1563978 L23.3976016,27.0952699 L7.5,18.351 L7.5,33.75 C7.5,35.2687831 8.73121694,36.5 10.25,36.5 L37.75,36.5 C39.2687831,36.5 40.5,35.2687831 40.5,33.75 L40.5,18.351 Z M37.75,11.5 L10.25,11.5 C8.73121694,11.5 7.5,12.7312169 7.5,14.25 L7.5,15.499 L24,24.573411 L40.5,15.498 L40.5,14.25 C40.5,12.7312169 39.2687831,11.5 37.75,11.5 Z" />
            </svg>
          </Link>
          {/* <Link href="https://youtube.com/@tailus-ui" target="blank" aria-label="medium" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500  hover:shadow-orange-600 shadow-md">
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/>
                        </svg>
                    </Link> */}
        </div>
      </div>
      <div className="flex flex-row text-slate-300 justify-center">
        &copy; {new Date().getFullYear()} Itzz Rio. All rights reserved.
        {/* <div>{`cc${currentYear} Itzz Rio`}</div> */}
      </div>
    </div>
  );
}
