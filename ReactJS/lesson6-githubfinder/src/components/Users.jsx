import React from 'react'
import SingleCard from './SingleCard'

const Users = ({ calluser }) => {
    return (
        <div>
            <div className="row g-5">
                {calluser.map(item => (
                    <SingleCard key={item.id} alldata={item} />
                ))}

            </div>
        </div>
    )
}

export default Users