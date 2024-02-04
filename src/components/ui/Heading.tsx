import { HeadingProps } from '@/utils/interfaces';

const Heading: React.FC<HeadingProps> = ({ projectName, color }) => {
  return (
    <h3 className="text-2xl font-bold my-3">
      <span
        className={`bg-clip-text text-transparent bg-gradient-to-r ${color} to-bright animate-gradient`}>
        {projectName}
      </span>
    </h3>
  );
};

export default Heading;
