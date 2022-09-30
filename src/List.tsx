import React from "react";
import css from "cease";

const List = ({ labels }) => (
  <ul>
    {labels.map(label => (
      <li key={label}>{label}</li>
    ))}
  </ul>
);

export default List;

// const styled = css`
//   ul {
//     border: 2px solid;
//     padding: 0;
//     width: 150px;
//     border-radius: 15px;
//   }

//   li {
//     list-style: none;
//     padding: 10px 0;
//     border-top: 2px solid;
//     font: bold 20px sans-serif;
//     text-align: center;
//   }
//   li:first-of-type {
//     border: 0;
//   }
// `(List);

// export { styled as List };
