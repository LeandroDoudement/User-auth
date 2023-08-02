import { Inter } from 'next/font/google';
import UserForm from '@/components/userForm';
import Header from '@/components/header';
import { useRouter } from 'next/router';
import { useHttpClient } from '@/lib/http-client';
import { Loading } from '@/components/loading';

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useHttpClient<User>(`/user/${id}`);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
      <UserForm user={data} />
    </div>
  );
}
