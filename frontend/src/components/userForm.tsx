import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { httpClient } from '@/lib/http-client';

interface UserForm extends Partial<User> {
  confirmPassword: string;
}

const UserForm = () => {
  const { register, handleSubmit } = useForm<UserForm>();
  const router = useRouter();

  const onSubmit = async (data: UserForm) => {
    if (data.password !== data.confirmPassword) {
      alert('As senhas não conferem');
      return;
    }
    try {
      const result = await httpClient.post('/user', data);
      console.log(result);
      router.push('/user-created');
    } catch (e) {
      alert('Email já cadastrado');
    }
  };

  return (
    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='mb-8 text-3xl text-center'>Cadastro de usuário</h1>
        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('fullname')}
          required
          placeholder='Nome Completo'
        />

        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('age')}
          required
          placeholder='Idade'
        />
        <input
          type='tel'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('phone')}
          required
          placeholder='Telefone'
        />

        <div className='mb-4'>
          <select
            id='gender'
            {...register('gender')}
            required
            className='block border border-grey-light w-full p-3 rounded bg-secondary'
          >
            <option value='' disabled selected hidden>
              Selecione seu gênero
            </option>
            <option value='male'>Masculino</option>
            <option value='female'>Feminino</option>
            <option value='notDeclared'>Prefiro não dizer</option>
          </select>
        </div>

        <input
          type='email'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('email')}
          required
          placeholder='Email'
        />

        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('password')}
          required
          placeholder='Senha'
        />
        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...register('confirmPassword')}
          required
          placeholder='Confirme a senha'
        />

        <div className='text-center text-sm text-grey-dark my-4 flex gap-1'>
          <input
            type='checkbox'
            id='termsOfService'
            {...register('termsOfService')}
            required
          />
          <label htmlFor='termsOfService'>
            Concordo com os termos de uso e política de privacidade
          </label>
        </div>
        <button
          type='submit'
          className='w-full text-center py-3 rounded bg-primary text-white my-4 '
        >
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default UserForm;
