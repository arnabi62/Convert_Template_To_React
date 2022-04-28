import React from "react"

const Card = ({title="Tiitle", buttonText = "buttonText", subText = "subText", imgUrl = "imgUrl"})=>
{
    return (
        <div className="card" style={{width: "18rem"}}>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {subText}
          </p>
          <button className="btn btn-success"some>{buttonText}</button>
        </div>
      </div>
    );
}

export default Card;