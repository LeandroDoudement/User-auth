import Link from 'next/link';

const UserCreated = () => {
  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">
          Usuário cadastrado com sucesso{' '}
        </h1>
        <button
          type="submit"
          className="mb-4  w-full text-center py-3 rounded bg-primary text-white my-4 "
        >
          <Link href="/users-panel">Acessar painel de usuários</Link>
        </button>
        <button
          type="submit"
          className="mb-4  w-full text-center py-3 rounded bg-primary text-white my-4 "
        >
          <Link href="/">Voltar para o cadastro de usuário</Link>
        </button>
      </div>
    </div>
  );
};

export default UserCreated;
