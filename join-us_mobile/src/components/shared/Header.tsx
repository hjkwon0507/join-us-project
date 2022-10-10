import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
  height: 80px;
  border: 1px solid red;
`

function Header() {
  return (
    <Container>
      헤더
    </Container>
  );
}

export default Header;