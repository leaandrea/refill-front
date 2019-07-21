import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

export default function ProSection() {
  return (
    <>
      <section className="pro">
        <h1 className="pro-title">
          Restaurants, stores, communities : Join Refill !
        </h1>
        <div className="pro-flex-container">
          <div className="pro-left-side">
            <FontAwesomeIcon icon={faPoo} className="icon-mouse-pointer" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              repellendus veniam qui sunt placeat, fugiat accusamus enim,
              tempore error quam blanditiis dolorem soluta ab quae sequi id hic
              nostrum nihil.
            </p>
          </div>
          <div className="pro-right-side">
            <FontAwesomeIcon icon={faPoo} className="icon-mouse-pointer" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              temporibus, rem qui recusandae fugiat quidem, ab autem
              voluptatibus iure neque est et! Modi ea, repudiandae tempora
              aspernatur eveniet amet perferendis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
