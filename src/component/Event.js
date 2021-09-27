import EventBnr from './EventBnr';
import eventBnrData from '../data/eventBnrData';
import { useState } from 'react';

export default function Event(props){
  
  let [data, setData] = useState(eventBnrData);


  return (
    <>
      <div className="event">
        <div className="inner">
          {
            data.map((a, i) => {
              return <EventBnr data={data[i]} key={i}/>
            })
          }
        </div>
        
        
        
      </div>
    </>
  )
}