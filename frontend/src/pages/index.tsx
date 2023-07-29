import { Inter } from 'next/font/google';
import UserForm from '@/components/user-form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-primary min-h-screen flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <UserForm />
      </div>
    </div>
  );
}
