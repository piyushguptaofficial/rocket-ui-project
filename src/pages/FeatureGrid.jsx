import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import FilterToolbar from './FilterToolbar';
import { useFilterContext } from '../hooks/FilterContext';

const FeatureGrid = () => {
  const { filteredAndSortedFeatures } = useFilterContext();
  const containerRef = useRef(null);

  // 🔄 Scroll to top when filters or sort options change
  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [filteredAndSortedFeatures]);

  const isEmpty = filteredAndSortedFeatures.length === 0;

  return (
    <section
      ref={containerRef}
      className="py-10 px-4 lg:px-0 font-inter scroll-mt-20"
    >
      {/* 🔧 Toolbar */}
      <FilterToolbar totalResults={filteredAndSortedFeatures.length} />

      {/* 🔢 Result Count */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {filteredAndSortedFeatures.length} result
        {filteredAndSortedFeatures.length !== 1 && 's'}
      </div>

      {/* ❌ Empty State */}
      {isEmpty ? (
        <motion.div
          key="no-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full text-center border border-white/10 dark:border-white/5 rounded-lg py-16 bg-gray-900 text-gray-400"
        >
          <div className="text-4xl mb-2">🤷‍♂️</div>
          <h3 className="text-lg font-semibold text-white mb-1">
            No results found.
          </h3>
          <p className="text-sm">Please try different filters.</p>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedFeatures.map((feature, index) => (
              <motion.div
                key={`${feature.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FeatureCard index={index} {...feature} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default FeatureGrid;