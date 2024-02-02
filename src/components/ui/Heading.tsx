import { HeadingProps } from '@/utils/interfaces';
import Link from 'next/link';

const Heading: React.FC<HeadingProps> = ({ topic, subTopic, href }) => {
  return (
    <div>
      <h1 className="text-4xl">{topic}</h1>
      <Link href={href}>
        <p>{subTopic}</p>
      </Link>
    </div>
  );
};

export default Heading;
