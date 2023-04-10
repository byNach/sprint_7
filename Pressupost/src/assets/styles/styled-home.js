import styled from 'styled-components';

const HomeBackground = styled.div`
background-color: beige;
`

const CalculadoraButton = styled.button`
width: 110px;
height: 40px;
border-radius: 20px;
margin-top: 30px;
background-color: lavender;
:hover{
  width: 130px;
  transition-duration: .5s;
}
`
export {HomeBackground ,CalculadoraButton}