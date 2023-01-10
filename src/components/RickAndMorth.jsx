import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Locations from './Locations';
import Resident from './Resident';
import Paginacion from './Paginacion';

const RickAndMorth = () => {
    const [rickLocation, setRickLocation] = useState({})

    useEffect(() => {
        let idLocation = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(res => {
                setRickLocation(res.data)
                setPage(1)
            })

    }, [])

    console.log(rickLocation)

    const [searchloc, setSearchloc] = useState("")

    const search = () => {
        if (searchloc <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${searchloc}`)
                .then(res => setRickLocation(res.data))
            setSearchloc("")
            setPage(1)
        } else {
            alert("de 1 a 126")
            setSearchloc("")
        }

    }

    const [page, setPage] = useState(1)
    const perPage = 4
    const quantyPage = Math.ceil(rickLocation.residents?.length / perPage)

    const firstIndex = (page - 1) * perPage

    const residents = rickLocation.residents?.slice(firstIndex, firstIndex + perPage)
    return (
        <div className='ContenedorSuperior'>
            <div className='Input'>
                <input className='float' type="number" min={1} max={126} value={searchloc} placeholder={"valores de 1 al 126"} onChange={(e) => setSearchloc(e.target.value)} /><button className='floatB' onClick={search}>Buscar</button>
            </div>
            <div className='page'>
                <Locations className="Location" rick={rickLocation} /><br />
                <Paginacion page={page} setPage={setPage} quantyPage={quantyPage} /><br />
                <div className='Grid'>
                    {rickLocation.residents?.map((rick) => (
                        <Resident url={rick} key={rick} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default RickAndMorth;