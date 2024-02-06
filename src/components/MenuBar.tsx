// import { useRef } from 'react';
// import { motion, sync, useCycle } from 'framer-motion';
// import { useDimensions } from '@/hooks/useDimension';
// import MenuToggle from './MenuToggle';
// import MenuItem from './MenuItem';

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const listVariants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

// const MenuBar = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   const itemIds = [0, 1, 2, 3, 4];

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       custom={height}
//       ref={containerRef}
//       className="menu-nav">
//       <motion.div className="menu-background" variants={sidebar} />
//       <div className="items-container">
//         <motion.ul variants={listVariants}>
//           {itemIds.map((i) => (
//             <MenuItem i={i} key={i} />
//           ))}
//         </motion.ul>
//       </div>
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };

// export default MenuBar;

import { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimension';
import MenuToggle from './MenuToggle';
import MenuItem from './MenuItem';

// Define your menu items
const menuItems = [
  {
    id: 0,
    name: 'Home',
    route: '/',
    color: '#FF008C',
  },
  {
    id: 1,
    name: 'About',
    route: '/about',
    color: '#D309E1',
  },
  {
    id: 2,
    name: 'About',
    route: '/about',
    color: '#D309E1',
  },
  {
    id: 3,
    name: 'About',
    route: '/about',
    color: '#D309E1',
  },
];
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleItemClick = () => {
    toggleOpen(); // Close the menu when a menu item is clicked
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="menu-nav">
      <motion.div className="menu-background" variants={sidebar} />
      <div className="items-container">
        <motion.ul variants={listVariants}>
          {/* Render menu items dynamically */}
          {menuItems.map((item) => (
            <MenuItem key={item.id} name={item.name} color={item.color} onClick={handleItemClick} />
          ))}
        </motion.ul>
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MenuBar;
