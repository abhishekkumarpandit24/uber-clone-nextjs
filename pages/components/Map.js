import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
"pk.eyJ1IjoiYWJoaXNoZWs4MTEiLCJhIjoiY2w5bzJsOTB4MGR3ZDQxbzZuNmtucTV0ZyJ9.zMKJ_wAZvBoLbXfPL9jdgw"


const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [77.102493, 28.704060],
          zoom: 3
        })

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates, props.dropoffCoordinates){
          map.fitBounds(
            [
              props.dropoffCoordinates,
              props.pickupCoordinates
            ],
            {
              padding: 60
            }
          )
        }
      }, [props.pickupCoordinates, props.dropoffCoordinates])

      const addToMap = (map, coordinates)=>{
        const marker1=new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
      }
      

  return (
    <Wrapper id='map'>
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`
