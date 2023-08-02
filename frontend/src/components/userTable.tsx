import { useState } from 'react';
import { httpClient, useHttpClient } from '@/lib/http-client';
import ReadOnlyRow from './readOnlyRow';
import { Loading } from './loading';

const pageSize = 5;

interface Props {
  filter?: string;
}

const UserTable = ({ filter }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, refetch } = useHttpClient<ResultList<User>>(`/user`, {
    take: pageSize,
    skip: (currentPage - 1) * pageSize,
    filter,
  });

  if (!data || loading) {
    return <Loading />;
  }

  const deleteUser = async (id: number) => {
    await httpClient.delete(`/user/${id}`);
    refetch();
  };

  const totalPages = Math.ceil(data.totalCount / pageSize);

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
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-auto max-w-[90vw] sm:max-w-full">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Idade
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gênero
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Termos de serviço
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {data.entries.map((user) => (
                <ReadOnlyRow
                  key={user.id}
                  user={user}
                  deleteUser={deleteUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-black p-2">
          Página {currentPage} de {totalPages}
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0  p-2">
          <button
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-secondary bg-primary disabled:opacity-50 rounded"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Anterior</span>
          </button>

          <button
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-secondary bg-primary disabled:opacity-50 rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <span>Próximo</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
