import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; 
    background-color: #f0f2f5; 
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); 
    padding: 0; 
    width: 90%;
    max-width: 400px;
    margin: auto; 
  }

  .truncated {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    white-space: normal; 
  }

  .footer {
    margin-top: 20px;
    text-align: center;
    color: #666;
    font-size: 0.9em;
  }
`;

export default GlobalStyle;
