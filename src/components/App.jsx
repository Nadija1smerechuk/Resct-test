
import React, { useState, useId} from 'react';

import SearchBar from './SearchBar';
import LoginForm from "./LoginForm";

import LangSwitcher from './LangSwitcher';
  
  
  
export default function App() {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);


  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleLoginChange = (evt) => {
    setValues({
      ...values,
      login: evt.target.value,
    });
  };

  const handlePwdChange = (evt) => {
    setValues({
      ...values,
      password: evt.target.value,
    });
  };

  const handleChange = (evt) => {
  setHasAccepted(evt.target.checked);
};

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;

    // Посилання на DOM-елементи
    console.log(login, password);

    // Значення полів
    console.log(login.value, password.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} />

      <SearchBar />

    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang}/>
      </>
      
      <>
      <h1>Select coffee size</h1>
      <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
            onChange={handleSizeChange}
          />
            
        Small
      </label>
      <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
            onChange={handleSizeChange}
          />
        Meduim
      </label>
      <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
            onChange={handleSizeChange}
          />
        Large
        </label>
        <p>
        <b>Selected size:</b> {coffeeSize}
      </p>
      </>
      

      <div>
      <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          /> 
				I accept terms and conditions
      </label>
        <button
          type="button"
          disabled={!hasAccepted}>
        Proceed
      </button>
      </div>
    </div>

    
  );
}



