import { useState } from 'react';

const UserTable = () => {
  const [filterName, setFilterName] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterTerms, setFilterTerms] = useState('');

  const initialUserData = [
    {
      id: 1,
      fullname: 'Vera Carpenter',
      age: 30,
      phone: '5562999999999',
      gender: 'Feminino',
      email: 'vera@example.com',
      serviceTerms: true,
    },
    {
      id: 2,
      fullname: 'Blake Bowman',
      age: 25,
      phone: '5564999888899',
      gender: 'Male',
      email: 'blake@example.com',
      serviceTerms: false,
    },
  ];

  const filteredUserData = initialUserData.filter((user) => {
    return (
      user.fullname.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterAge === '' || user.age.toString() === filterAge) &&
      user.phone.includes(filterPhone) &&
      (filterGender === '' ||
        user.gender.toLowerCase() === filterGender.toLowerCase()) &&
      user.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
      (filterTerms === '' || user.serviceTerms.toString() === filterTerms)
    );
  });

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
                placeholder='Nome'
                className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                onChange={(e) => setFilterName(e.target.value)}
              />
            </div>
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
                placeholder='Idade'
                className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                onChange={(e) => setFilterAge(e.target.value)}
              />
            </div>
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
                placeholder='Telefone'
                className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                onChange={(e) => setFilterPhone(e.target.value)}
              />
            </div>
            <div className='relative'>
              <select
                className='appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500'
                onChange={(e) => setFilterGender(e.target.value)}
              >
                <option disabled selected hidden>
                  Gênero
                </option>
                <option value={''}>Todos</option>
                <option value={'male'}>Masculino</option>
                <option value='female'>Feminino</option>
                <option value='notDeclared'>Não declarado</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
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
                placeholder='Email'
                className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                onChange={(e) => setFilterEmail(e.target.value)}
              />
            </div>
            <div className='relative'>
              <select
                id='termsOfService'
                className='appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                onChange={(e) => setFilterTerms(e.target.value)}
              >
                <option value='' disabled selected hidden>
                  Termos de serviço
                </option>
                <option value={''}>Todos</option>
                <option value={'true'}>Aceito</option>
                <option value={'false'}>Não aceito</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
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
                  {filteredUserData.map((user) => (
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
                          {user.serviceTerms ? 'Accepted' : 'Not Accepted'}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
