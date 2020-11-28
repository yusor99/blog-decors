import { Button, Card } from "antd";
const { Meta } = Card;
const Cards = () => {
  return (
    <Card
      title="title"
      bordered={false}
      hoverable
      cover={<img alt="example" src="/img/card.png" />}
      style={{ width: 300, marginRight: 20, padding: 10 }}
    >
      <Meta
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada non libero ac dapibus. Pellentesque semper eros non sagittis gravida.
     "
      />
      <Button style={{ borderColor: "black", marginTop: 20 }}>More Info</Button>
    </Card>
  );
};
export default Cards;
