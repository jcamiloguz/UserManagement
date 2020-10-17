import styled from 'styled-components'

export const Wrapper =styled.div`
display:grid;
max-width:1020px;
width:100%;
height:150px;
border-radius:5px;
overflow:hidden;
box-shadow:0px 5px 10px #ccc;
grid-template-columns:40px 1fr 170px;
align-items:center;
gap:20px;
.index{
	height:40px;
	background-color:#192A56;
	align-self: start;
	display:flex;
	justify-content:center;
	align-items:center;
	color:#fefefe;
}
hr{
border-top: 1px solid red;
}

`