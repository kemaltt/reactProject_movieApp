import React from "react";

export default function Overview() {
  return (
    <div className="over d-flex">
      <img src={"https://picsum.photos/300/500"} className=" m-4" alt="" />
      <div className="description p-4">
        <h2>title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          ab culpa aut vel obcaecati hic eligendi dignissimos itaque quis sed
          modi ipsum quo, iure maiores praesentium optio, nulla sapiente
          incidunt?
        </p>
        <h5>Release Date :</h5>
      </div>
    </div>
  );
}
