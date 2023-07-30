import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  return (
    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          router.push('/user-created');
        })}
      >
        <h1 className='mb-8 text-3xl text-center'>Cadastro de usuário</h1>
        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...(register('fullname'), { required: true })}
          placeholder='Nome Completo'
        />

        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...(register('age'), { required: true })}
          placeholder='Idade'
        />
        <input
          type='tel'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...(register('phone'), { required: true })}
          placeholder='Telefone'
        />

        <div className='mb-4'>
          <select
            id='gender'
            {...(register('gender'), { required: true })}
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
          {...(register('email'), { required: true })}
          placeholder='Email'
        />

        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...(register('password'), { required: true })}
          placeholder='Senha'
        />
        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          {...(register('confirmPassword'), { required: true })}
          placeholder='Confirme a senha'
        />

        <div className='text-center text-sm text-grey-dark my-4 flex gap-1'>
          <input
            type='checkbox'
            id='termosDeServico'
            {...(register('termosDeServico'), { required: true })}
          />
          <label htmlFor='termosDeServico'>
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
