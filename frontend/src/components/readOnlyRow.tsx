import { useRouter } from 'next/router';

interface ReadOnlyRowProps {
  user: User;
  deleteUser: Function;
}

const genderLabels = {
  male: 'Masculino',
  female: 'Feminino',
  notDeclared: 'Não declarado',
};

const ReadOnlyRow = ({ user, deleteUser }: ReadOnlyRowProps) => {
  const router = useRouter();

  return (
    <tr key={user.id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{user.fullname}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.age}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {genderLabels[user.gender]}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {user.termsOfService ? 'Aceito' : 'Não aceito'}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-4">
        <button
          className="text-blue-500"
          onClick={(event) => {
            event.preventDefault();
            router.push(`/${user.id}/edit-user`);
          }}
        >
          Editar
        </button>
        <button
          className="text-red-500 ml-2"
          onClick={() => deleteUser(user.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
