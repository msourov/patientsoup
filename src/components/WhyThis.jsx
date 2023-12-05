import { useContext } from "react";
import { AppContext } from "../context";
import "../styles/whythis.css";
const WhyThis = () => {
  const { data } = useContext(AppContext);
  const suggestions = data?.about_foundation?.[0] || [];
  const { uid, desc_point, description, name } = suggestions;
  console.log(suggestions);
  return (
    <div className="whythis-container">
      <h1 className="why-this-title">{name}</h1>
    </div>
  );
};

export default WhyThis;
