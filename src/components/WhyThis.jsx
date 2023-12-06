import { useContext } from "react";
import { AppContext } from "../context";
import "../styles/whythis.css";

const WhyThis = () => {
  const { data } = useContext(AppContext);
  const suggestions = data?.about_foundation?.[0] || [];
  const { uid, desc_point, description, name } = suggestions;
  const listItems = Object.values(desc_point || []);
  const firstHalf = Object.values(
    listItems?.slice(0, Math.ceil(listItems.length) / 2)
  );
  const secondHalf = Object.values(
    listItems?.slice(Math.ceil(listItems.length) / 2)
  );

  // const imgUrl = uid ? `http://192.168.0.143:8000/images/${uid}.png` : null;
  return (
    <div className="whythis-container">
      <h1 className="why-this-title">{name}</h1>
      <div className="whythis-items">
        <div className="w-left-list">
          {firstHalf &&
            firstHalf.map((item, index) => (
              <>
                <li key={index + 6} className="w-list-item-title">
                  {/* <span className="icon-container">
                    <img src={imgUrl} className="whythis-img" alt="Icon" />
                  </span> */}
                  {item.title}
                </li>
                <li key={index + 1} className="w-list-item-desc">
                  {item.desc}
                </li>
              </>
            ))}
        </div>

        <div className="w-right-list">
          {secondHalf &&
            secondHalf.map((item, index) => (
              <>
                <li key={index} className="w-list-item-title">
                  {/* <span className="icon-container">
                    <img src={imgUrl} className="whythis-img" alt="Icon" />
                  </span> */}
                  {item.title}
                </li>
                <li key={index + 1} className="w-list-item-desc">
                  {item.desc}
                </li>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyThis;
