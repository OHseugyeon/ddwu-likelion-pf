import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate, useSearchParams } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 80%;
  height: 560px;
  top: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  margin: auto;
  top: 43px;
`;

const Title = styled.div`
  position: relative;
  height: 48px;
  top: 53px;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const Name = styled.div`
  position: relative;
  width: 36px;
  height: 26px;
  top: 109px;
  left: 10px;
`;

const NameBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 117px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  padding-left: 10px;
  outline: none;
`;

const Phone = styled.div`
  position: relative;
  width: 74px;
  height: 26px;
  top: 155px;
  left: 8px;
`;

const PhoneBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 161px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  padding-left: 10px;
  outline: none;
`;

const Button = styled.div`
  position: relative;
  width: 93px;
  height: 36px;
  top: 195px;
  background: #902443;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
`;

const BtnText = styled.div`
  position: relative;
  height: 26px;
  top: 5px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const Footer = styled.div`
  position: relative;
  height: 29px;
  top: 280px;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`;

const Sbox = styled.div`
  position: relative;
  width: 10px;
  top: 121px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;

const Sbox2 = styled.div`
  position: relative;
  width: 10px;
  top: 167px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;

const Div = styled.div`
  text-align: center;
  margin: auto;
`;

const Container = styled.div`
  width: 210px;
  margin: auto;
`;

const Main = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const discriminate = () => {
    let ans = false;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 1
      ) {
        navigate("/pass", { state: data[i].name });
        ans = true;
        break;
      } else if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 0
      ) {
        navigate("/fail");
        ans = true;
        break;
      }
    }

    if (!ans) {
      alert(
        "등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!"
      );
    }
  };

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br /> 11기 아기사자 합격자 발표
        </Title>
        <Div>
          <Container>
            <Sbox />
            <Name>성함</Name>
            <NameBox className="nameBox" onChange={handleName}></NameBox>
            <Sbox2 />
            <Phone>전화번호</Phone>
            <PhoneBox className="phoneBox" onChange={handlePhone}></PhoneBox>
          </Container>
          <Button onClick={discriminate}>
            <BtnText>입력</BtnText>
          </Button>
        </Div>
        <Footer>DONGDUK X LIKELION</Footer>
      </WhiteBox>
    </Background>
  );
};

export default Main;
