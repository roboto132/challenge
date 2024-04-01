export type  Country = 'India' | 'USA' | 'France';

export interface State {
  countries: { [key in Country]: boolean };
  selectAll: boolean;
}

export type Action =
  | { type: 'TOGGLE_COUNTRY'; country: Country }
  | { type: 'TOGGLE_SELECT_ALL' };

export interface CheckBoxProps {
  value: Country | "Select All";
  isChecked: boolean;
  handleCheckboxChange: (optionValue: Country) => void;
}
