import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Summit Website",
    image: "/summitwebsite.png",
    description:
      "Revamped Summit Technical College's site using React, enhancing its interface and overall user experience. Integrated Maps API for navigation, Facebook API for dynamic content, and image caching for faster loads. Employed responsive design for optimal browsing across devices.",
    link: "https://summittechnicalcollege.ac.ke/",
    stack: ["React.js", "Tailwind CSS", "Maps API", "Cpanel"],
  },
  {
    name: "Summit Student Portal",
    image: "/portal.png",
    description:
      "Empowers over 2000 students and serves as a centralized hub for accessing vital academic resources and information. Seamlessly integrated with the college's systems, the portal enables students to conveniently access their fee statement and class links, facilitating efficient participation in online classes. It has a user-friendly design and responsive interface, which enhances student experience.",
    link: "https://portal.summittechnicalcollege.ac.ke/",
    stack: ["Next.js", "Tailwind CSS", "API", "Cpanel"],
  },
  {
    name: "Summit Dashboard",
    image: "/summit-dashboard.png",
    description:
      "Admin-exclusive dashboard facilitates user management, class link updates for different programmes, and fee statement display. Student list includes balance restrictions for link access, ensuring administrative control over academic resources and financial oversight.",
    link: "https://summit-dashboard.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "API", "Vercel"],
  },
];

export default function ProjectsBanner() {
  return (
    <div className="px-10 pt-20 font-sans">
      <h2 className="text-slate-300 text-7xl font-extrabold">Projects</h2>

      <p className="text-xl text-slate-400 mt-8 font-medium">
        Some of the projects I&apos;ve build for a clients
      </p>

      <div className="mt-5 space-y-5">
        {projects.map((project) => (
          <div key={project.name} className="flex">
            <Image
              src={project.image}
              alt={project.image}
              width={450}
              height={500}
            />

            <div className="ml-5">
              <p className="text-slate-300 text-xl font-semibold">
                {project.name}
              </p>

              <p className="text-sm text-slate-400 mt-2">
                {project.description}
              </p>

              <div className="flex items-center space-x-3">
                {project.stack.map((tech) => (
                  <p
                    key={tech}
                    className="text-yellow-500 text-sm font-semibold mt-3 mb-5 list-disc"
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:text-yellow-500 px-5 py-1 text-sm font-medium rounded-md"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
