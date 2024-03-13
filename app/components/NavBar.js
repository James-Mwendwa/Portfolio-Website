import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <div className="bg-white rounded-md flex items-center justify-between p-3 font-sans">
      <div>
        <Link href="/" className="text-lg font-semibold">
          James Mwendwa
        </Link>
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
