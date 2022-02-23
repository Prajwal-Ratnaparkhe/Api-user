import React from "react";

const ApiItems = (props) => {
  let { name, company } = props;

  return (
    <div>
      <div className="my-5">

        <ul className="list-group">
          <li className="list-group-item">
            {" "}
            <b>Name : </b>
            {name}     <br/> 
            <b>Company : </b>
            {company}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApiItems;
