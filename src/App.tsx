import React, { useReducer } from 'react';
import { CheckBox } from './components/CheckBox';
import { Country, State, Action } from './types/types';

const initialState: State = {
  countries: {
    India: false,
    USA: false,
    France: false
  },
  selectAll: false
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_COUNTRY': {
      const { country } = action;
      const updatedCountries = {
        ...state.countries,
        [country]: !state.countries[country]
      };
      const allCountriesSelected = Object.values(updatedCountries).every(
        value => value === true
      );
      return {
        ...state,
        countries: updatedCountries,
        selectAll: allCountriesSelected
      };
    }
    case 'TOGGLE_SELECT_ALL': {
      const newValue = !state.selectAll;
      const updatedCountries = newValue
        ? { India: true, USA: true, France: true }
        : { India: false, USA: false, France: false };
      return {
        ...state,
        countries: updatedCountries,
        selectAll: newValue
      };
    }
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCountryCheckboxChange = (country: Country) => {
    dispatch({ type: 'TOGGLE_COUNTRY', country });
  };

  const handleSelectAllCheckboxChange = () => {
    dispatch({ type: 'TOGGLE_SELECT_ALL' });
  };

  return (
    <div>
      <CheckBox
        value="Select All"
        isChecked={state.selectAll}
        handleCheckboxChange={handleSelectAllCheckboxChange}
      />
      {Object.entries(state.countries).map(([country, isChecked]) => (
        <div key={country}>
          <CheckBox
              value={country as Country}
              isChecked={isChecked}
              handleCheckboxChange={handleCountryCheckboxChange}
          />
        </div>
      ))}
    </div>
    
  );
};

export default App;
