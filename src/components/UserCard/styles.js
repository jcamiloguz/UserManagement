import styled from 'styled-components'

export const Wrapper =styled.div`
display:grid;
max-width:1020px;
width:100%;
height:${props=>props.edit ? '580px':'150px' };
border-radius:5px;
overflow:hidden;
box-shadow:0px 5px 10px #ccc;
grid-template-columns:40px 1fr 150px 40px;
align-items:center;
gap:20px;
background-color:var(--bg-primary);
transition:250ms;
h1{
	display:inline;
	color:var(--blue-dark) ;
}
h3{
	display:inline;
	color:var(--blue-primary) ;
}
form{
	grid-column:2 /5;
}
hr{
border-top: 5px solid var(--blue-dark);
}
.index{
	height:40px;
	background-color:var(--blue-dark);
	font-size:1.5rem;
	align-self: start;
	display:flex;
	justify-content:center;
	align-items:center;
	color:var(--bg-primary);
}
.ButtonWrapper{
height:150px;
display:flex;
align-items:center;
}
.exit{
	height:40px;
	background-color:var(--red-primary);
	grid-column:4 /5;
	font-size:1.5rem;
	align-self: start;
	display:flex;
	justify-content:center;
	align-items:center;
	color:var(--bg-primary);
	cursor:pointer;
	:hover{
	background-color:var(--red-dark);

	}
}

`