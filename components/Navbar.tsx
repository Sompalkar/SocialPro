

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MenuIcon, BellIcon, MessageCircleIcon, UserIcon, SearchIcon, XIcon, FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion' 
import { useRouter } from 'next/navigation'; 


export function Navbar (){
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

        <>
        

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
              <Link href={'/home'} className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Home
              </Link>
              <Link href={'/network'} className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Network
              </Link>
              <Link href= {'/jobs'} className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
                Jobs
              </Link>
              <Link href={'/chat'} className="text-base font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200">
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
              <Link href={'/home'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Home
              </Link>
              <Link href={'/network'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Network
              </Link>
              <Link href={'/jobs'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Jobs
              </Link>
              <Link href={'/chat'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                Messaging
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </>
    )
}