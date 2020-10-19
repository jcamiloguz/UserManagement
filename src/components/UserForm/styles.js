import styled from 'styled-components'

export const Form =styled.form`
display:grid;
grid-template-columns:1fr 1fr;
padding-right:60px;
gap:20px;
margin-bottom:40px;
label{
margin-top:10px;
font-size:1rem;
}
.checkboxes label{
	display:block;
}
.buttons{
	grid-column-start:2;
	display:flex;
	justify-content:space-between;
}
h4{
	color:#E84118
}
`

export const Input =styled.input`
border:1px solid #ccc;
border-radius:3px;
margin-bottom:8px;
padding: 8px 4px;
display:block;
width:100%;
`