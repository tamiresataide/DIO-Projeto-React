import { useState } from 'react';

const Teste = () => {

   const [name, setName] = useState('Tamires')

   const handleChangeName = () => {
      setName(prev => prev === 'Tamires' ? 'Maria' : 'Tamires')
   }

  return (
    <div>
      <p>
         {name}
      </p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export {Teste};
