import { useEffect, useState } from 'react';
import { httpClient } from '@/lib/http-client';
const UserTable = () => {
  const [initialUserData, setInitialUserData] = useState<User[]>([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get('/user');
        setInitialUserData(response.data);
      } catch (error) {
        console.error('Error fetching initial user data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUserData = initialUserData.filter((user) => {
    return (
      user.fullname.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const deleteUser = async (id: number) => {
    await httpClient.delete(`/user/${id}`);
    const newUserData = initialUserData.filter((user) => user.id !== id);
    setInitialUserData(newUserData);
  };

  const indexOfLastUser = currentPage * 5;
  const indexOfFirstUser = indexOfLastUser - 5;
  const currentUsers = filteredUserData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(filteredUserData.length / 5);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='antialiased font-sans bg-gray-200'>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div>
            <h2 className='text-2xl font-semibold leading-tight'>
              Painel de usuários
            </h2>
          </div>
          <div className='my-2 flex sm:flex-row flex-col gap-2'>
            <div className='flex flex-row mb-1 sm:mb-0'></div>
            <div className='block relative'>
              <span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg
                  viewBox='0 0 24 24'
                  className='h-4 w-4 fill-current text-gray-500'
                >
                  <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                </svg>
              </span>
              <input
                placeholder='Nome ou Email'
                className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Nome
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Idade
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Telefone
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Gênero
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Email
                    </th>

                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Termos de serviço
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='ml-3'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {user.fullname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {user.age}
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {user.phone}
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {user.gender}
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {user.email}
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {user.termsOfService ? 'Accepted' : 'Not Accepted'}
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-4'>
                        <button className='text-blue-500'>Editar</button>
                        <button
                          className='text-red-500 ml-2'
                          onClick={() => deleteUser(user.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='mt-6 sm:flex sm:items-center sm:justify-between '>
                <div className='text-sm text-black'>
                  Pagina {currentPage} de {totalPages}
                </div>

                <div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
                  <button
                    className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-secondary bg-primary disabled:opacity-50'
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 rtl:-scale-x-100'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                      />
                    </svg>

                    <span>Anterior</span>
                  </button>

                  <button
                    className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-secondary bg-primary disabled:opacity-50'
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <span>Próximo</span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 rtl:-scale-x-100'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
