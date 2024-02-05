import React from 'react';
import Button from './ui/Button';

const Footer = () => {
  return (
    <div className=" flex-col justify-center items-center text-center">
      <div className="mb-12 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">
          And That's a Wrap – Until Our Code Cross Paths Again!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6 px-8 md:px-16 lg:px-32 text-shade">
        <p>
          Thanks for exploring my digital playground! If you've got a project that needs some tech
          love or just want to share a good coding joke, I'm all in!
        </p>
        <p>
          Ready to make things fun and functional? Shoot me a message, and let's chat about your
          next project!
        </p>
        <Button href="/" text="Say Hello" />
      </div>
    </div>
  );
};

export default Footer;
