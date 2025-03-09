import React from 'react'
import { motion } from "framer-motion"

const MainPage = () => {
  return (
    <>
      <div className="min-h-[600px] w-full bg-gradient-to-br -mt-1.5 from-gray-900 via-gray-800 to-black text-white">

        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h1 className="mb-6 sm:mb-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hire the best freelancers for any job, online.
            </h1>

            <ul className="mb-8 sm:mb-12 space-y-3 sm:space-y-4 text-lg sm:text-xl text-gray-300">
              <li className="flex items-center justify-center">
                <span className="mr-2 text-gray-300">•</span>
                World's largest freelance marketplace
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2 text-gray-300">•</span>
                Any job you can possibly think of
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2 text-gray-300">•</span>
                Save up to 90% & get quotes for free
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2 text-gray-300">•</span>
                Pay only when you're 100% happy
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                className="w-full sm:w-auto rounded-md bg-pink-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-pink-700"
              >
                Hire a Freelancer
              </button>
              <button
                className="w-full sm:w-auto rounded-md border border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                Earn Money Freelancing
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default MainPage
