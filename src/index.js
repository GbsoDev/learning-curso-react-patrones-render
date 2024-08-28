import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';




function App({ saludo, nombre }) {
  return <h1>!{saludo}, {nombre}¡</h1>
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteSaludo(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Este parrafo de acompañamiento</p>
        </>
      );
    }
  }
}


const AppWIthSaludo = withSaludo(App)('hola')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWIthSaludo nombre={'Gerson'} />);
