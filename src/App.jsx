import React from "react";
import RButton from "./RButton";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
`;

const SRButton = styled.button`
  width: 200px;
  height: 25px;
  margin: 10px;

  outline: none;
  border: ${(props) => (props.isBorder ? "1px solid #999" : "none")};
  border-radius: 5px;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
    color: #fff;
  }
`;
const CustomButton = styled(Button)`
  box-shadow: 3px 3px 3px #333;
`;

const SR2 = styled(SRButton)`
  color: red;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <RButton message="hi" />
        <SRButton>button</SRButton>
        <SRButton isBorder={true}>true button</SRButton>
        <SRButton isBorder={false}>false button</SRButton>
        <SR2>dd</SR2>
        <Button size="small" type="primary">
          antd button
        </Button>

        <CustomButton size="small" type="primary">
          dfdfdfd
        </CustomButton>

        <Wrapper>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </Wrapper>
        <hr />
        <Wrapper direction="row">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
