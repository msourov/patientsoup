import { useContext } from "react";
import { AppContext } from "../context";
import "../styles/hero.css";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Hero = () => {
  const { data } = useContext(AppContext);
  const bannerItems = data?.banner?.[0];
  const { name, uid, description, desc_point } = bannerItems || [];

  const imgUrl = uid ? `http://192.168.0.143:8000/images/${uid}.png` : null;

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-text-wrapper">
          <h1 className="text-3xl font-bold underline text-orange-500">
            {name}
          </h1>
          <p style={{ fontWeight: "bold" }}>{desc_point?.data_1}</p>
          <p>{description}</p>
          <Button
            type="primary"
            className="hero-order-btn"
            style={{
              backgroundColor: "#ffa500",
              color: "black",
              borderRadius: "20px",
            }}
          >
            <ShoppingCartOutlined />
            অর্ডার করতে চাই
          </Button>
        </div>
        <div className="hero-img-wrapper">
          {<img src={imgUrl} className="hero-img" />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
