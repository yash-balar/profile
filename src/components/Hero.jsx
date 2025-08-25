import React from 'react'
import DeveloperImg from '../assets/developer.jpeg'
import Resume from '../assets/Yash-Balar-Resume.pdf'

const Hero = () => {
  return (
    <section
  id="home"
  className="container pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden"
>
  <div className="absolute inset-0 -z-10">
    <div
      className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
      style={{
        transform:
          "translateX(0.504994px) translateY(-0.504994px) scale(1.00337)"
      }}
    />
    <div
      className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-500/10 rounded-full blur-3xl"
      style={{
        transform:
          "translateX(-39.6264px) translateY(39.6264px) scale(0.801868)"
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/5 to-blue-500/5 rounded-full blur-2xl"
      style={{
        transform: "translateX(3.3082px) translateY(3.3082px) scale(1.01654)"
      }}
    />
  </div>
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    <div className="flex-1" style={{ opacity: 1, transform: "none" }}>
      <h3
        className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="flex items-center gap-4 mb-4">
            <div
                className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                style={{ transform: "none" }}
            >
                <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-blue-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                I'm Software Engineer
            </h2>
        </div>
      </h3>
      <div className='text-gray-300'>
        <p
        className="mt-3 text-muted-foreground text-lg leading-relaxed"
      >
   I have 3.5 years of professional experience in building scalable, high-performance web applications. Skilled in developing responsive frontends, RESTful APIs, and full-stack solutions using React, Next.js, Node.js, MySQL, and GitLab.
      </p>
      <p
        className="mt-3 text-muted-foreground text-lg leading-relaxed"
      >
       I specialize in creating user-friendly interfaces, efficient backend systems, and optimized database architectures that improve performance and scalability. Experienced in version control, CI/CD workflows, and collaborative development environments.
      </p>
      <p
        className="mt-3 text-muted-foreground text-lg leading-relaxed"
      >
        Passionate about delivering clean, maintainable code and solving complex problems in fast-paced, agile teams.
      </p>
      </div>
      <a
        href={Resume}
        target="_blank"
        className="px-8 max-w-[220px] mt-4 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3"
        tabIndex={0}
        style={{ borderColor: "rgba(255, 255, 255, 0.2)", transform: "none" }}
        >
        <div className='text-white' style={{ transform: "translateY(-2.32394px)" }}><svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download w-5 h-5 mr-2"
            >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} x2={12} y1={15} y2={3} />
            </svg>
        </div>
        Download CV
        </a>

    </div>
    <div
      className="flex-1 w-full flex flex-col items-end gap-4"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="relative group">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-20"
          style={{ transform: "scale(1.02173)" }}
        />
        <div
          className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full"
          style={{ transform: "scale(1.09804)" }}
        />
        <div
          className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
          style={{ transform: "scale(1.03731)" }}
        />
        <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-500">
          <img
            src={DeveloperImg}
            alt="Aditya Kumar"
            className="w-full h-auto"
            loading="lazy"
            style={{ transform: "none" }}
          />
        </div>
      </div>
      <div
        className="flex  items-center gap-4 text-xl"
        style={{ opacity: 1, transform: "none" }}
      >
        <a
          href="mailto:yashbalar123@gmail.com"
          aria-label="Email"
          className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/30"
          tabIndex={0}
          style={{ transform: "none" }}
        >
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/yash-balar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/30"
          tabIndex={0}
          style={{ transform: "none" }}
        >
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth={0}
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
        <a
          href="https://github.com/yash-balar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/30"
          tabIndex={0}
          style={{ transform: "none" }}
        >
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth={0}
            viewBox="0 0 496 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero