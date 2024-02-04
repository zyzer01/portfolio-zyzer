import { ButtonProps } from '@/utils/interfaces';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <div>
      <Link href={href}>
        <button className="proggy group text-bright rounded border border-bright hover:bg-gray-500 hover:bg-opacity-25 duration-500 transition ease-in-out px-10 py-2 flex items-center">
          {text}{' '}
          <span className="inline-block text-xl ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <MdOutlineArrowOutward />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
