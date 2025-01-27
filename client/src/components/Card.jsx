import React from 'react'
import "../style/Card.css";

const Card = (props) => {
  const renderCard = () => {
    console.log(props)
    switch (props.type) {
      case "user":
      const { _id, image } = props.user; 
      return (
        <div className="user-card-body">
          <p className="name">{props.user.name}</p>
          <img src={image} />
          <button value={_id} onClick={()=> props.addFriend(_id, props.user.name) } className="card-btn">Add Friend</button>
        </div>
      )
      case "friend":
      console.log(props.friend)
      return (
        <div>
          <div className="user-card-body">
          <p className="name">{props.friend.name}</p>
          <img src={props.friend.image} />
        </div>
        </div>
      )
      case "restaurant":
      const { image_url, name, rating, price, location, phone, distance, categories } = props.restaurant;
      return (
        <div className="card-body">
          <p className="name">{name}</p>
          <div>{categories.map((category, index) => {
          const { title } = category
          return (
          <span className="category">{title} </span>
          )
          })}
        </div>
          <p className="rating">rating: {rating}</p>
          <p className="rating">{price}</p>
          <p>{location.address1}, {location.city}, {location.zip_code}, {location.state}</p>
          <p>{phone}</p>
          <img src={image_url} alt=""/>
        </div>
      )
      default: return null
    }
  }
  return <div>{renderCard()}</div>
}

export default Card;

