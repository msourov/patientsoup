import { useContext } from "react";
import "../styles/pricing.css";
import { AppContext } from "../context";

const Pricing = () => {
  const { data } = useContext(AppContext);
  const pricing = data?.slogan?.[0] || [];
  const pricing_info = Object.values(pricing || []);
  const { uid, desc_point, description, name }
  console.log(pricing_info)

  return (
    <div className="pricing-section">
      <h1>{}</h1>
    </div>
  );
};

export default Pricing;
