import { HeadingProps, ColorVariants } from '@/utils/interfaces';

const Heading: React.FC<HeadingProps> = ({ projectName, color }) => {
  const colorVariants: ColorVariants = {
    yellow: 'from-yellow-600 to-bright',
    blue: 'from-blue-600 to-bright',
    purple: 'from-purple-500 to-bright',
  };

  return (
    <h3 className="text-lg md:text-2xl font-bold my-3">
      <span
        className={`bg-clip-text text-transparent bg-gradient-to-r ${colorVariants[color]} animate-gradient`}>
        {projectName}
      </span>
    </h3>
  );
};

export default Heading;
