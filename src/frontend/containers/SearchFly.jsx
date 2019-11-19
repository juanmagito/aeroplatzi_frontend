import React from 'react';
import SelectorFlyLugares from '../components/SelectorFlyLugares';
import Calendar from '../components/Calendar';
import '../assets/styles/components/SearchFly.scss';

const SearchFly = () => {
  let optionsPersonas = [];
  for (let index = 1; index <= 20; index++) {
    optionsPersonas.push(index);
  }

  return (
    <main>
      <h1>Busca tu Vuelo</h1>
      <div className='searchFly-container'>
        <form action="/#" className='searchFly-form'>
        <div className="selectDestinos">
          <label>
            <input type="checkbox" value="first_checkbox" />
            Solo ida
          </label>
          <SelectorFlyLugares title='IDA, Seleccione el Origen' />
          <SelectorFlyLugares title='Destino, Seleccione el Destino' />
        </div>

        <div className="selectDate">
          <Calendar id='startDate' label='Fecha de Salida:' />
          <Calendar id='endDate' label='Fecha de Llegada:' />
        </div>

        <div className="selectPersonas">
          <label htmlFor="numberPersons">Numero de personas</label>
          <select name="flyIda" id="numberPersons">
            {optionsPersonas.map((item) => <option value={item.toFixed()} key={item}>{item} persona</option>)}
          </select>
          <input type="submit" value="Buscar vuelo" />
        </div>
        </form>
      </div>
    </main>
  );
};

export default SearchFly;