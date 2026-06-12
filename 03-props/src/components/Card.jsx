import React from 'react'

const Card = (props) => {
  return (
   <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor, dolorum provident voluptatum dolorem et ut aspernatur ullam, perspiciatis consectetur necessitatibus corrupti voluptatibus, quaerat maxime quidem doloribus voluptate. Aut!</p>
      
       <button> view profile</button>
      </div>

  )
}

export default Card
