import Image from 'next/image';
import Link from 'next/link';
import notFoundImage from '/public/images/error 404 image.png';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-bright h-screen">
      <div>
        <Image src={notFoundImage} width={500} height={450} alt="Not found error page" />
      </div>
      <div className="text-center text-gray-800">
        <h2 className="text-2xl font-bold pb-3">looks like you're lost</h2>
        <p className="proggy text-2xl">the page you are looking for is not available</p>
        <p className="mt-4 text-primary">
          <Link href="/">go back home</Link>
        </p>
      </div>
    </div>
  );
}
