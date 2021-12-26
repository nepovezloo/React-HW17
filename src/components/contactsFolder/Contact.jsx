import React from 'react';

function InfAboutContact ({firstName, lastName, phone, gender}) {
    return (
        <>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{phone}</div>
        <div>{gender}</div>
        <hr />
        </>
    )
}

export default InfAboutContact