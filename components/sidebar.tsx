"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Draft builder", href: "/dashboard/draft-builder" },
  { name: "Document", href: "/dashboard/documents" },
  { name: "Service", href: "/dashboard/service" },
  { name: "Template Library", href: "/dashboard/template-library" },
  { name: "Contact us", href: "/dashboard/contact-us" },
  { name: "FAQs", href: "/dashboard/faqs" },
  { name: "About us", href: "/dashboard/about-us" },
  { name: "Subscription", href: "/dashboard/subscription" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6">
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-gray-700 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-6">
         <Link href="/logout" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            Logout
        </Link>
      </div>
    </aside>
  );
}