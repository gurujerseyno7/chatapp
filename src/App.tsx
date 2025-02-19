import React from 'react';

import './App.css';
import CustomTextField from './components/customtextfield/CustomTextField';


function App() {
  return (
    <div>
      Hi Team!
      <CustomTextField label={'Name'} placeholder={'AshKetchum'} variant={'filled'} type={'search'} helperText={''} name={''} className={''} isOptional={false}/>
    </div>
  );
}

export default App;
