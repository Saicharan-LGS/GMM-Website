// import { Children } from "react";
const Btn = ({ Children }) => {
  console.log(Children);
  return (
    <>
      <button> {Children}</button>
    </>
  );
};

export default Btn;
