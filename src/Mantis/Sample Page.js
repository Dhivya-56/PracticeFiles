import React from "react";
import { Breadcrumb, Typography, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
const SamplePage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src="mantislogo.png"
          height="60px"
          width="60px"
          className="mantis_logo"
        />
        <Typography style={{ fontSize: 27 }}>Mantis</Typography>
      </div>
      <Card
        hoverable={true}
        bordered={true}
        size="medium"
        title="Sample Page"
        style={{
          width: 750,
          margin: "auto",
          position: "relative",
          marginTop: 50,
          boxShadow: 50,
        }}
      >
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/samplepage">Sample Page</a>,
            },
          ]}
        />
        <Typography>Sample Page</Typography>
        <Card style={{ width: 700 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum
          sollicitudin sapien, quis tempor ipsum rhoncus id. Maecenas tellus
          elit, porta sit amet odio lacinia, finibus ultricies ex. Integer
          sagittis lobortis lorem in lobortis. Vestibulum vitae massa felis.
          Duis accumsan sagittis dapibus. Phasellus lacinia sapien a malesuada
          volutpat. Nunc non convallis ante. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Cras
          nec pellentesque elit, et hendrerit neque. Ut eget ligula id elit
          ullamcorper maximus eu quis turpis.
        </Card>
        <Button type="primary" onClick={handleClick}>
          Back To Home
        </Button>
      </Card>
    </div>
  );
};

export default SamplePage;
