import React,{useState,useEffect} from 'react'

import Api from './API/Api'




function App() {
  const [devices,setDevices] = useState([])

  useEffect(async ()=>{
      // setDevices( await Api.getDevice())
  },[])




  async function getDevice(id) {
    setDevices(await Api.getDevice(id))
  }

  return (
    <div className="App">

        <button className="btn" onClick={()=>getDevice(Math.floor(Math.random() * 50))}>
          get one!
        </button>
      { Object.keys(devices).length ?
        <div className='device'>{devices.name}</div>
          :
          ''
      }
        {/*{devices.length ?*/}
        {/*    devices.map(i=>{*/}
        {/*        return <div key={i.id} className='device'>{i.name}</div>*/}
        {/*    })*/}
        {/*    :*/}
        {/*    <div className='loader'>*/}
        {/*      loading...*/}
        {/*    </div>*/}
        {/*}*/}
    </div>
  );
}

export default App;
