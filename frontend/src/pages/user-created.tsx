import Header from '@/components/header';
import Link from 'next/link';

const UserCreated = () => {
  return (
    <div className='bg-primary min-h-screen flex flex-col'>
      <Header />
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center'>
            Usuário cadastrado com sucesso{' '}
          </h1>
          <p className='mb-4 text-center'>
            <Link href='/users-panel'>Acessar painel de usuários</Link>
          </p>
          <p className='mb-4 text-center'>
            <Link href='/'>Voltar para a página inicial</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCreated;
