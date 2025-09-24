import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://linkedin.com/in/victor-olumide",
    icon: FaLinkedin,
    className: "text-blue-600 hover:text-blue-800 transition-colors",
    size: 40,
  },
  {
    href: "https://github.com/Victor-Olumide",
    icon: FaGithub,
    className: "text-gray-800 hover:text-gray-600 transition-colors",
    size: 40,
  },
  {
    href: "https://www.facebook.com/share/19vz7JKxo9/",
    icon: FaFacebook,
    className: "text-blue-700 hover:text-blue-900 transition-colors",
    size: 40,
  },
  {
    href: "https://instagram.com/official_victor_olumide",
    icon: FaInstagram,
    className: "text-pink-600 hover:text-pink-800 transition-colors",
    size: 40,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-8">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent size={link.size} className={link.className} />
          </Link>
        );
      })}
    </div>
  );
}
