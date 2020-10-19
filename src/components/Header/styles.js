import styled from 'styled-components'

export const Container = styled.header`
width:100%;
height:60px;
margin-bottom:20px;
display:flex;
align-items:center;
background-color:#192A56;
box-shadow:0px 5px 10px #ccc;
nav{
	max-width:1020px;
	width:100%;
	margin:0 auto;
}
a{
color: #FCFCFC;
font-size:1.5rem;
margin-left:20px;
border-radius:4px;
padding:4px 15px;
&.active{
background-color:#273C75;
}
}
`