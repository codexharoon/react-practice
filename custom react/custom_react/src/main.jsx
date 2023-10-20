import React from 'react'
import ReactDOM from 'react-dom/client'

const customReactElement = React.createElement(
  'a',
  {'href':'https://google.com','target':'_blank'},
  'Go to Google.com',
);

function MyApp(){

  const aText = 'Google.com';

  return (
    <>
      <a href='https://google.com' target='_blank'>
        {aText}   {/* <- evaluated expression  */}
      </a>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // customReactElement
  // MyApp()
  <MyApp/>
)
