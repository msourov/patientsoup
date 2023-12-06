import { useContext } from "react";
import "../styles/pricing.css";
import { AppContext } from "../context";
import { Button, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Pricing = () => {
  const { data } = useContext(AppContext);
  const pricing = data?.slogan?.[0] || [];
  const { uid, desc_point, description, title } = pricing;
  const { data_1, data_2 } = desc_point || {};
  return (
    <div className="pricing-section">
      <Card title={<h1>{title}</h1>} bordered>
        <div className="prices">
          <p>{data_1}</p>
          <p>{data_2}</p>
        </div>
        <p className="pricing-desc">{description}</p>
        <div className="pricing-order-btn-wrapper">
          <Button
            type="primary"
            className="pricing-order-btn"
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
      </Card>
    </div>
  );
};

export default Pricing;
