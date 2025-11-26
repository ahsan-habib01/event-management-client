import Link from 'next/link';
import { Calendar, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Browse Events', href: '/events' },
        { label: 'Create Event', href: '/add-event' },
        { label: 'My Events', href: '/manage-events' },
        { label: 'How It Works', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Calendar className="w-8 h-8 text-blue-500 group-hover:scale-110 transition" />
              <span className="text-xl font-bold text-white">EventHub</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate platform for creating, discovering, and managing
              events. Join thousands of organizers and attendees worldwide.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-400 transition hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} EventHub. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="hover:text-blue-400 transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
