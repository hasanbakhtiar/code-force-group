import React from 'react'
import AppUseLayoutEffect from './components/AppUseLayoutEffect'
import AppUseMemo from './components/AppUseMemo'
import AppUseImperativeHandle from './components/AppUseImperativeHandle'

const App = () => {
  return (
    <div>
      {/* <AppUseLayoutEffect /> */}
      {/* <AppUseMemo /> */}
      <AppUseImperativeHandle />
    </div>
  )
}

export default App