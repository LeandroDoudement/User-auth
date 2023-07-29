import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-secondary w-full h-20 flex items-center mb-2 md:mb-8'>
      <Image
        className='ml-5'
        src='/images/logo.svg'
        alt='Logo'
        width={153}
        height={45}
      />
    </div>
  );
};

export default Header;
