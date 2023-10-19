import React from 'react'
import MantisDesign from './Mantis/MantisDesign'
import {Routes,Route} from 'react-router-dom'
import SignIn from './Design/SignIn'
import Sample from './Mantis/Sample Page'
import SamplePage from './Mantis/Sample Page'
const AppMantis = () => {
  return (
    <div>
     
<Routes>
  <Route path="/" element={ <MantisDesign/>}/>
  <Route path="/sigin" element={<SignIn/>}/> 
  <Route path="/samplepage" element={<SamplePage/>}/>
 </Routes>

    </div>
  )
}

export default AppMantis
