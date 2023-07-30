import Header from '@/components/header';
import UserTable from '@/components/userTable';

const UsersPanel = () => {
  return (
    <div className='bg-primary min-h-screen flex flex-col'>
      <Header />
      <div className='container mx-auto flex-1 flex flex-col items-center px-2'>
        <UserTable />
      </div>
    </div>
  );
};

export default UsersPanel;
