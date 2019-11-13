import React from 'react';
import SelectorFlyLugares from '../components/SelectorFlyLugares';

const SearchFly = () => {
  return (
    <main>
      <h1>Busca tu Vuelo</h1>
      <div className='searchFly-container'>
        <form action="/#" className='searchFly-form'>
          <label>
            <input type="checkbox" value="first_checkbox" />
            Solo ida
          </label>
          <SelectorFlyLugares title='IDA, Seleccione el Origen' />
          <SelectorFlyLugares title='Destino, Seleccione el Destino' />

          <label htmlFor="startDate">Fecha de Salida:</label>
          <input
            id="startDate"
            type="date"
            name="trip-start"
            min="2019-01-01"
            max="2025-12-31"
          />

          <label htmlFor="endDate">Fecha de regreso:</label>
          <input
            id="endDate"
            type="date"
            name="trip-start"
            min="2019-01-01"
            max="2025-12-31"
          />

          <label htmlFor="numberPersons">Numero de personas</label>
          <select name="flyIda" id="numberPersons">
            <option value="1">1 persona</option>
            <option value="2">2 persona</option>
            <option value="3">3 persona</option>
            <option value="4">4 persona</option>
            <option value="5">5 persona</option>
          </select>

          <input type="submit" value="Buscar vuelo" />
        </form>
      </div>
    </main>
  );
};

export default SearchFly;