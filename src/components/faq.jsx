import { Tabs } from "antd";
// import { faqdata } from "./faqItems";
// const tabItems = [
//   {
//     key: "1",
//     label: "All",
//     children: <Collapse accordion size="large" items={allQnaItems} />,
//   },
//   {
//     key: "2",
//     label: "General Questions",
//     children: <Collapse accordion size="large" items={generalQnaItems} />,
//   },
//   {
//     key: "3",
//     label: "Merchant Questions",
//     children: <Collapse accordion size="large" items={merchantQnaItems} />,
//   },
// ];

// console.log(faqdata());
const Faq = () => {
  // const data = faqdata();
  // console.log(data);
  // const { name, desc_point } = (data && data[0]) || {};
  // console.log(Object.values(desc_point));
  // const items = Object.values(desc_point).map((item) => {
  //   return { label: item.title, children: <p>{item.desc}</p> };
  // });
  // console.log(items);
  return (
    <div className="faq-container">
      <h1 className="faq-title">{}</h1>
    </div>
  );
};

export default Faq;
