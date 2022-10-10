import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #4f4e57;
  padding: 40px 100px;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
  line-height: 2em;
  ul {
    display: flex;
    margin-bottom: 5px;
  }
  ul li:first-child {
    margin-right: 20px
  }
`
const LinkBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Links = [
  {
    name: "우리들교회유튜브채널",
    src: "https://www.youtube.com/wooridlechurch",
  },
  {
    name: "큐티엠유튜브채널",
    src: "https://www.youtube.com/%ED%81%90%ED%8B%B0%EC%97%A0",
  },
  {
    name: "개인정보 취급방침",
    src: "#",
  },
  {
    name: "사이트맵",
    src: "#",
  },
  {
    name: "즐겨찾기 등록",
    src: "#",
  },
]
const Link = styled.a`
  margin: 0 30px 5px 0;
  font-size: 14px;
  color: #fff;
`

function Footer(){
  return(
      <Container>
        <LinkBox>
          {Links.map((link) => {
            return (
              <Link key={link.name} src={link.src}>{link.name}</Link>
            )
          })}
        </LinkBox>
        <ul>
          <li>큐티엠 : 경기도 성남시 분당구 판교공원로2길 22, 4~5층</li>
          <li>큐티엠 Tel : 큐티선교회, 양육교재주문 031-705-5460 / 큐티인 정기구독 031-707-8781</li>
        </ul>
        <p>Copyright&copy;2017 큐티엠 All rights reserved</p>
      </Container>
  );
}

export default Footer;