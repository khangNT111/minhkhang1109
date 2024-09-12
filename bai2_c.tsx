import React, { useState } 
from 'react';

function randomPassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, length) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:',.<>/?";

  let charSet = '';
  if (includeLowercase) charSet += lowerCase;
  if (includeUppercase) charSet += upperCase;
  if (includeNumbers) charSet += numbers;
  if (includeSymbols) charSet += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const newPassword = randomPassword(
      includeLowercase, 
      includeUppercase, 
      includeNumbers, 
      includeSymbols, 
      passwordLength
    );
    setGeneratedPassword(newPassword);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', backgroundColor: '#282A36', borderRadius: '10px', color: '#FFF' }}>
      <h2>Password Generator</h2>
      <div>
        <input 
          type="text" 
          value={generatedPassword} 
          readOnly 
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #555' }} 
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Password length:</label>
        <input 
          type="number" 
          value={passwordLength} 
          onChange={(e) => setPasswordLength(Number(e.target.value))} 
          style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #555' }} 
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          checked={includeLowercase} 
          onChange={(e) => setIncludeLowercase(e.target.checked)} 
        /> Include lower case letters
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          checked={includeUppercase} 
          onChange={(e) => setIncludeUppercase(e.target.checked)} 
        /> Include upper case letters
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          checked={includeNumbers} 
          onChange={(e) => setIncludeNumbers(e.target.checked)} 
        /> Include numbers
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          checked={includeSymbols} 
          onChange={(e) => setIncludeSymbols(e.target.checked)} 
        /> Include special symbols
      </div>

      <button 
        onClick={generatePassword} 
        style={{ width: '100%', padding: '10px', backgroundColor: '#6272A4', color: '#FFF', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
