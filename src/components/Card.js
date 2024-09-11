import React from 'react'

const Card = ({course}) => {
    return(
        <div>
            <div>
                <img src={course.image.url} alt={course.title}></img>
                <div>
                    hi
                    <button>

                    </button>
                </div>

            </div>
        </div>
    )
}
export default Card;