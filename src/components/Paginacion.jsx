import React from 'react';

const Paginacion = ({page, setPage, quantyPage}) => {
    return (
        <div className='Paginacion'>
            { page > 1 && 
            <button onClick={() => setPage(page -1)}>Anterios</button>}
            <p>{page} de {quantyPage}</p>
            { quantyPage > page && 
            <button onClick={() => setPage(page +1)}>Proximo</button>}
        </div>
    );
};

export default Paginacion;