import styled from 'styled-components'

export const Wrapper =styled.div`
display:grid;
display:-ms-grid;
max-width:1020px;
width:100%;
height:${props=>props.edit ? '580px':'150px' };
border-radius:5px;
overflow:hidden;
box-shadow:0px 5px 10px #ccc;
grid-template-columns:40px 1fr 150px 40px;
-ms-grid-columns:40px 1fr 150px 40px;
align-items:center;
gap:20px;
background-color:#FCFCFC;
transition:250ms;
h1{
	display:inline;
	color:#192A56;
}
h3{
	display:inline;
	color:#273C75 ;
}
form{
	grid-column:2 /5;
	-ms-grid-column:2;
	-ms-grid-column-span:3;
	-ms-grid-row:2;
}
hr{
border-top: 5px solid #192A56;
}
.index{
	-ms-grid-column:1;

	height:40px;
	background-color:#192A56;
	font-size:1.5rem;
	align-self: start;
	display:flex;
	justify-content:center;
	align-items:center;
	color:#FCFCFC;
}
.UserTitle{
	-ms-grid-column:2;

}
.ButtonWrapper{
	-ms-grid-column:3;
height:${props=>props.edit ? '60px':'150px' };
display:flex;
align-items:center;
}
.exit{
	height:40px;
	background-color:#E84118;
	grid-column:4 /5;
	-ms-grid-column:4;
	font-size:1.5rem;
	align-self: start;
	display:flex;
	justify-content:center;
	align-items:center;
	color:#FCFCFC;
	cursor:pointer;
	:hover{
	background-color:#C23616;

	}
}

`