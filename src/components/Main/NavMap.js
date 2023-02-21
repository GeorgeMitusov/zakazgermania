import React from 'react';
import { Map, Marker } from "pigeon-maps"

import '../../styles/Main/NavMap.scss';

const NavMap = () => {

    const loc = [ 50.939317376363775, 6.960799217828786 ];

    return (
        <div className='map'>
            <Map height={300} defaultCenter={[loc[0], loc[1]]} defaultZoom={11}>
                <Marker width={50} anchor={[loc[0], loc[1]]} />
            </Map>
        </div>
    )
}

export default NavMap