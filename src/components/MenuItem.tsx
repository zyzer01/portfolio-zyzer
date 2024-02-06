import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface MenuItemProps {
  name: string;
  color: string;
  onClick: () => void;
}

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem: React.FC<MenuItemProps> = ({ name, color, onClick }) => {
  const style = { border: `2px solid ${color}` };
  return (
    <div className="list-items">
      <Link href={}>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}>
          <div className="icon-placeholder" style={style} />
          <div className="text-placeholder" style={style}>
            {name}
          </div>
        </motion.li>
      </Link>
    </div>
  );
};

export default MenuItem;
