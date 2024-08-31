'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MenuIcon, BellIcon, MessageCircleIcon, UserIcon, SearchIcon, XIcon, FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion' 
import { useRouter } from 'next/navigation';
import { UserRound } from 'lucide-react';
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-purple-50">
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow' : 'bg-transparent'} transition-all duration-300 ease-in-out`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                SocialPro
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                )}
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Network
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Jobs
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Messaging
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button variant="ghost" size="icon" className="ml-4 text-purple-600 hover:text-purple-700 transition-colors duration-200">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-4 text-purple-600 hover:text-purple-700 transition-colors duration-200">
                <BellIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-4 text-purple-600 hover:text-purple-700 transition-colors duration-200">
                <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-4 text-purple-600 hover:text-purple-700 transition-colors duration-200">
                <UserIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Home
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Network
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Jobs
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Messaging
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative bg-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-purple-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Welcome to </span>{' '}
                    <span className="block text-purple-600 xl:inline">SocialPro</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Connect, share, and grow your professional network with SocialPro. The ultimate platform for professionals to engage, learn, and advance their careers.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                      onClick={() => router.push('/login')} >
                        Get Started
                      </Button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </main>
            </div>
          </div>
         
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                SocialPro provides all the tools you need to build your professional network and advance your career.
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'Professional Networking',
                    description: 'Connect with professionals in your industry and beyond. Build meaningful relationships that can propel your career forward.',
                  },
                  {
                    name: 'Job Opportunities',
                    description: 'Discover and apply to job openings tailored to your skills and interests. Get notifications for roles that match your profile.',
                  },
                  {
                    name: 'Skill Development',
                    description: 'Access courses and resources to enhance your professional skills. Stay competitive in your field with continuous learning.',
                  },
                  {
                    name: 'Industry Insights',
                    description: 'Stay updated with the latest trends and news in your field. Gain valuable knowledge to make informed career decisions.',
                  },
                  {
                    name: 'Personal Branding',
                    description: 'Showcase your achievements and skills with a customizable profile. Stand out to potential employers and collaborators.',
                  },
                  {
                    name: 'Event Networking',
                    description: 'Discover and participate in industry events, both virtual and in-person. Expand your network and learn from thought leaders.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        {/* Icon would go here */}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-purple-50 py-16 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <blockquote className="mt-10">
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    "SocialPro has revolutionized the way I network and find job opportunities. It's not just a platform; it's a career companion that has helped me grow professionally."
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      
                      <p className="mx-auto mt-4 h-10 w-10 rounded-full">
                      
                      <UserRound/>

                      </p>
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">Sarah Thompson</div>
                      <svg className="hidden md:block mx-1 h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div className="text-base font-medium text-gray-500">Marketing Director, TechCorp</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Boost your career today.</span>
              <span className="block">Start using SocialPro for free.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-200">
              Join thousands of professionals who are already leveraging SocialPro to advance their careers and expand their networks.
            </p>
            <Button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto">
              Sign up for free
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              {/* <img
                className="h-10"
                src="/placeholder.svg?height=40&width=120"
                alt="Company logo"
              /> */}
              <p> SocialPro</p>
              <p className="text-gray-500 text-base">
                Making the world more professional, one connection at a time.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <GithubIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Networking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Job Search
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Skill Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Company Pages
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Guides
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        API Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Press
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Trademark Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 SocialPro, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}