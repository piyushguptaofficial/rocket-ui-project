import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

/**
 * FeatureCard - Display card for a single feature
 *
 * @param {string} title - Title of the feature
 * @param {string} description - Short description
 * @param {string[]} category - Categories (tags)
 * @param {string[]} tools - Tools used
 * @param {number} rating - Rating (out of 5)
 * @param {string} image - Optional image URL
 */
const FeatureCard = ({
  title,
  description,
  category = [],
  tools = [],
  rating = 0,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 100, damping: 12 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover object-center"
          loading="lazy"
        />
      )}

      <div className="p-6 space-y-4">
        {/* Title & Rating */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
            {title || 'Untitled'}
          </h3>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {/* Tags: Category & Tools */}
        <div className="flex flex-wrap gap-2 mt-2">
          {category.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          className="mt-4 w-full text-center text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white py-2 px-4 rounded-lg shadow hover:shadow-md transition hover:scale-[1.01]
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;