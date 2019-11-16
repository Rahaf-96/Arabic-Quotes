import React from 'react';


function Container({ handleClick }) {

  const categories = ["حكمة", "فلسفة", "تحفيز","وطنية",  "رومانسية", "حزن"];

  const circleComponent = categories.map((category, i) => {
    return (
      <div id="circle-bg" className="stripes" key={i}>
        <div className="circle shadow-5 bg-white" >
          <div className=" category pointer" onClick={() => handleClick(i + 1)}>
            <q >{category}</q>
          </div>
        </div>
      </div>
    );
  })
  return (

    <div className="circles">
      {circleComponent}
    </div>

  );
}

export default Container;