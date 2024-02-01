import { ButtonProps } from '@/utils/interfaces';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <div>
      <Link href={href}>
        <button className="proggy text-bright rounded border border-bright hover:bg-gray-900 duration-500 transition ease-in-out px-10 py-2 flex items-center">
          {text}{' '}
          <span className="inline-block text-xl ml-2">
            <MdOutlineArrowOutward />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
