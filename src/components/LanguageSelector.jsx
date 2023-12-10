// Import necessary dependencies
import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  // Language options
  const languageOptions = [
    { value: 'en', label: 'English 🇺🇸'},
    { value: 'ar', label: '🇸🇦 العربية ' },
  ];


  
 

  // Change language function
  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '2px solid rgb(124, 157, 100)', // Border color
      borderRadius: '8px',
      boxShadow: state.isFocused ? '0 0 0 2px #4115BA' : 'none', // Add box shadow on focus
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(124, 157, 100)' : 'white', // Background color for selected option
      color: state.isSelected ? 'white' : 'rgb(124, 157, 100)', // Text color
    }),
  };

  return (
    <div>
      <Select
        options={languageOptions}
        defaultValue={languageOptions.find((option) => option.value === i18n.language)}
        onChange={changeLanguage}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelector;