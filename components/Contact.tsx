import Link from "next/link";
import SocialIcons from "./SocialIcons";
export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto p-6 text-right space-y-12"
    >
      <div className="flex gap-8 items-center">
        <p className="shrink-0 text-lg">
          <span className="text-muted">05.</span> Contact
        </p>
        <hr className="w-full border-muted" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-left gap-12">
        <div className="md:w-2/5 space-y-6">
          <h2 className="font-semibold text-3xl md:text-4xl">Get in Touch</h2>
          <p>I am glad to connect, so come say hello and have a chat →</p>
          <SocialIcons />
        </div>
        <div className="w-px h-32 bg-muted md:block hidden"></div>
        <div className="flex gap-8 flex-wrap md:w-3/5">
          <Link
            href="mailto:namanchandok1@gmail.com"
            className="flex gap-4 items-center group"
          >
            <svg
              className="w-12 h-12 text-background p-3 bg-accent rounded-full group-hover:p-2.5 transition-all"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
            <p className="text-secondary">
              <span className="font-semibold text-lg text-foreground underline underline-offset-4 decoration-2 decoration-transparent group-hover:decoration-foreground transition">
                Mail
              </span>
              <br />
              namanchandok1@gmail.com
            </p>
          </Link>
          <div className="flex gap-4 items-center group">
            <svg
              className="w-12 h-12 text-background p-3 bg-accent rounded-full group-hover:p-2.5 transition-all"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>

            <p className="text-secondary">
              <span className="font-semibold text-lg text-foreground underline underline-offset-4 decoration-2 decoration-transparent group-hover:decoration-foreground transition">
                Location
              </span>
              <br />
              New Delhi, India
            </p>
          </div>
        </div>
      </div>
      <small className="leading-loose text-secondary">
        Built with <b>Next.js</b> and <b>Tailwind CSS</b>, deployed with{" "}
        <b>Github</b>.
        <br /> © {new Date().getFullYear()} <b>Naman Chandok</b>. All Rights
        Reserved.
      </small>
    </section>
  );
}
