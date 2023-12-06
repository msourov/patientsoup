import { useContext } from "react";
import { AppContext } from "../context";
import "../styles/items.css";
import { Button } from "antd";
import { PhoneFilled } from "@ant-design/icons";

const Items = () => {
  const { data, loading, error } = useContext(AppContext);
  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", fontSize: "1rem" }}>
        Error loading data
      </div>
    );
  }

  const items = data?.fact[0];
  const { name, description, uid, desc_point } = items || [];
  const listItems = Object.values(desc_point || []);
  const firstHalf = Object.values(
    listItems?.slice(0, Math.ceil(listItems.length) / 2)
  );
  const secondHalf = Object.values(
    listItems?.slice(Math.ceil(listItems.length) / 2)
  );

  return (
    <div className="items-container">
      <h1 className="items-title">{name}</h1>
      <p className="items-description">{description}</p>
      <div className="listitem-wrapper">
        <div className="h-left-list">
          {firstHalf &&
            firstHalf.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </div>
        <div className="h-right-list">
          {secondHalf &&
            secondHalf.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </div>
      </div>
      <div className="items-call-btn-wrapper">
        <Button
          type="primary"
          className="items-call-btn"
          style={{
            backgroundColor: "#ffa500",
            color: "black",
            borderRadius: "20px",
          }}
        >
          <PhoneFilled />
          ০১৯৭৩৩৮১০৮১
        </Button>
      </div>
    </div>
  );
};

export default Items;
