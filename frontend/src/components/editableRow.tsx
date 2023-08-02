import React from 'react';

interface EditableRowProps {
  handleCancelClick: Function;
  handleSaveClick: Function;
}

const EditableRow = ({
  handleCancelClick,
  handleSaveClick,
}: EditableRowProps) => {
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <input
          type='text'
          className='w-full focus:outline-none'
          placeholder='Nome'
          name='fullname'
          required
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <input
          type='text'
          className='w-full focus:outline-none'
          placeholder='Idade'
          name='age'
          required
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <input
          type='text'
          className='w-full focus:outline-none'
          placeholder='Telefone'
          name='phone'
          required
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <select
          id='gender'
          name='gender'
          className='w-full focus:outline-none'
          required
        >
          <option value='' disabled selected hidden>
            Selecione seu gênero
          </option>
          <option value='male'>Masculino</option>
          <option value='female'>Feminino</option>
          <option value='notDeclared'>Prefiro não dizer</option>
        </select>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <input
          type='text'
          className='w-full focus:outline-none'
          placeholder='Email'
          name='email'
          required
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <input
          type='checkbox'
          id='termsOfService'
          name='termsOfService'
          required
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex gap-2'>
          <button className='text-red-500' onClick={() => handleCancelClick()}>
            Cancelar
          </button>
          <button
            className='text-blue-500'
            onClick={(event) => handleSaveClick(event)}
          >
            Salvar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
