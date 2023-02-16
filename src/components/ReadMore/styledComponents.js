import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #1e293b;
  font-size: 30px;
`
export const SubHead = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: #334155;
  font-size: 18px;
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
`
export const Image = styled.img`
  width: 100%;
  height: 300px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 16px;
  align-self: flex-start;
  padding-left: ;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  border-radius: 4px;
  font-family: Roboto;
  width: 100px;
  height: 36px;
  align-self: center;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    align-self: flex-start;
  }
`
