import Link from "next/link";

const links = [
  { name: "About", href: "/portfolio/about" },
  { name: "Projects", href: "/portfolio/projects" },
  { name: "Blog", href: "/portfolio/blog" },
  { name: "Contact", href: "/portfolio/contact" },
];

export default function NavBar() {
  return (
    <div className="bg-white rounded-md flex items-center justify-between p-3">
      <div>
        <h2 className="text-lg font-semibold">James Mwendwa</h2>
      </div>

      <div className="flex items-center space-x-6">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <p className="text-base font-semibold">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
