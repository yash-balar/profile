import EasySell from "../assets/EasySell.png"
import Travela from "../assets/travela.png"
import Dvivid from "../assets/dvivid.png"
import Deal from "../assets/deal.png"
import Resume from "../assets/resume.png"
import Ball from "../assets/ball.png"

const projects = [
  {
    title: "Easysell-(CMS)",
    description:
      "An AI-powered seller management platform with secure multi-user access, dynamic product content, and AWS Seller Central API integration.",
    image: EasySell,
    tags: ["React.js", "Tailwind CSS", "shadcnUI", "React Query (TanStack)"],
    link: "https://easysell.artoon.in/",
  },
   {
    title: "Resume Analyser",
    image: Resume,
    description:
      "AI-driven hiring platform with candidate comparison dashboards, bulk resume analysis, and Razorpay integration for subscriptions.",
    tags: ["React.js", "Ant Design", "Tailwind CSS", "Razorpay"],
    link: "https://resume-analyser.artoon.in/",
  },
   {
    title: "Dealorchestra",
    image: Deal,
    description:
      "India’s trusted coupons and cashback platform with SEO-friendly pages, promo code logic, and optimized shopping experience.",
    tags: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
    link: "https://dealorchestra.com/",
  },
  {
    title: "Dvividconsultant",
    image: Dvivid,
    description:
      "Educational consultancy site with full admin-controlled content, foreign study applications, and integrations like Builder.io and Zoho.",
    tags: ["Next.js", "MUI", "Node.js", "Express.js", "MySQL"],
    link: "https://www.dvividconsultant.com/",
  },
  {
    title: "Travela",
    image: Travela,
    description:
      "Travel booking platform with secure authentication, RESTful APIs, and scalable MongoDB schemas for bookings and payments.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    link: "https://www.travala.com/",
  },
  {
    title: "PoolGame",
    image: Ball,
    description:
      "8 Ball Pool game backend with real-time gameplay, social logins, in-app purchases, and scalable MongoDB asset management.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.oengines.eightballpool",
  },
];


const Projects = () => {
  return (
    <div id="projects">
  <div className="text-start mb-16" style={{ opacity: 1, transform: "none" }}>
    <h2
      className="text-4xl md:text-6xl font-bold mb-3"
      style={{
        backgroundPosition: "15.9406% 50%",
        backgroundSize: "200% 200%"
      }}
    >
        <div className="flex items-center gap-4 mb-4">
            <div
                className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
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
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                Featured Projects
            </h2>

            </div>
            <div
            className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            style={{ width: "100%" }}
            />
    </h2>
   
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1={10} y1={14} x2={21} y2={3} />
            </svg>
            Open
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

</div>

  )
}

export default Projects