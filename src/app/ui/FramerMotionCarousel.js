import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'motion/react';

/**
 *
 * Makes and returns a carousel including all property images + thumbnail
 *
 * @param {Object} props includes:
 * - item data - all property images + image / video thumbnail

 * @returns a carousel from framer motion npm package including all property images + image / video
 * thumbnail
 */
export default function FramerMotionCarousel({ itemData }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='w-[500px] max-sm:w-full drop-shadow-xl max-md-1:w-[400px] max-sm-6:w-[300px]'>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-3xl' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {itemData.map((item, idx) => (
              <div
                key={idx}
                className='shrink-0 w-full h-full bg-[#433358] pl-20 pr-20 pt-3 pb-3 flex items-center justify-between max-sm-6:pl-18 max-sm-6:pr-18 max-xs-1:pl-16 max-xs-1:pr-16 max-xs-5:flex-col'
              >
                <div>
                  <p className='font-medium text-xl max-xs-1:text-lg max-xs-2:text-md'>{item[0]}</p>
                  <p className='font-light max-md-1:text-[11px] max-sm-6:hidden'>{item[1]}</p>
                </div>
                <p className='font-medium text-2xl max-xs-1:text-xl max-xs-2:text-lg'>{item[2]}</p>
              </div>
            ))}
          </motion.div>

          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-[#1E1529] hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === itemData.length - 1}
            onClick={() => setIndex((i) => Math.min(itemData.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === itemData.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-[#1E1529] hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </motion.button>

          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {itemData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-1E1529' : 'w-2 bg-1E1529'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
