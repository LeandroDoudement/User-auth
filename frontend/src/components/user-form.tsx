const userForm = () => {
  return (
    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
      <form action=''>
        <h1 className='mb-8 text-3xl text-center'>Cadastro de usuário</h1>
        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          name='fullname'
          placeholder='Nome Completo'
        />

        <input
          type='text'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          name='age'
          placeholder='Idade'
        />

        <div className='mb-4'>
          <select
            id='gender'
            name='gender'
            className='block border border-grey-light w-full p-3 rounded bg-secondary'
          >
            <option
              value=''
              disabled
              selected
              hidden
              className=' checked:text-gray-500'
            >
              Selecione seu gênero
            </option>
            <option value='male'>Masculino</option>
            <option value='female'>Feminino</option>
            <option value='undefined'>Prefiro não dizer</option>
          </select>
        </div>

        <input
          type='email'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          name='email'
          placeholder='Email'
        />

        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          name='password'
          placeholder='Senha'
        />
        <input
          type='password'
          className='block border border-grey-light w-full p-3 rounded mb-4'
          name='confirm_password'
          placeholder='Confirme a senha'
        />

        <div className='text-center text-sm text-grey-dark my-4 flex gap-1'>
          <input
            type='checkbox'
            id='termosDeServico'
            name='termos_de_servico'
          />
          <label htmlFor='termosDeServico'>
            Você concorda com os termos de serviço e política de privacidade
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

export default userForm;
