import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className='bg-secondary w-full h-20 flex items-center mb-2 md:mb-8'>
      <Image
        className='ml-5 cursor-pointer'
        src='/images/logo.svg'
        alt='Logo'
        width={153}
        height={45}
        onClick={() => router.push('/')}
        priority
      />
    </div>
  );
};

export default Header;
