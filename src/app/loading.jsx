"use client"
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Loading = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-center font-serif font-extrabold leading-snug flex items-center justify-center text-5xl sm:text-5xl md:text-5xl lg:text-6xl">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primaryBlue first-letter-effect"
            >
              S
            </motion.span>
            <span className="text-secondaryBlue">mile</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-secondaryBlue first-letter-effect-red"
            >
              {" "}S
            </motion.span>
            <span className="text-secondaryRed">tore</span>
          </h1>
        </motion.div>

        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-blue-200 rounded-full"></div>
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 border-4 border-primaryBlue rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl text-gray-600 mb-8"
        >
          Loading...
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white rounded-full
            hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center mx-auto"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          Return Home
        </motion.button>

        <div className="flex justify-center space-x-2 mt-8">
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-primaryBlue rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-secondaryBlue rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-secondaryRed rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 