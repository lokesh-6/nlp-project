// Hero.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

function Main({ url, setUrl }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    setErrorMessage(""); // Clear error message when user starts typing
  };

  const handleButtonClick = async () => {
    if (isValidURL(url)) {
      // URL is valid, now check if it exists
      navigate('/display-data');

    } else {
      // URL is invalid, show an error message
      setErrorMessage("Please enter a valid URL.");
    }
  };

  const isValidURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
  };

  return (
    <div className='flex flex-col justify-start items-center w-full h-screen pt-20 gap-24'>
      <div className='flex flex-col justify-center items-center w-full gap-4'> 
        <h1 className='text-3xl font-bold'>Free Web Scraping Tool - Convert Website to Text Analysis</h1>
        <p>Use this tool to convert any webpage text and derive linguistics analysis from it simple step. Get the insights in well structured format.</p>
      </div>

      <div className='flex flex-col justify-center items-center w-full gap-4 shadow p-4'>
        <div className='flex flex-col justify-center items-center gap-4 w-[900px] h-[300px] border-4 '>
          <h2 className='font-semibold text-lg'>Enter any URL you want to read</h2>
          <input 
            type="text" 
            name="url" 
            value={url} 
            onChange={handleInputChange} 
            placeholder='Place the URL' 
            className='px-4 py-2 border-2 w-80'
          />
          <button className="button-65" role="button" onClick={handleButtonClick} disabled={loading}>
            {loading ? "Checking..." : "Proceed"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Main;
