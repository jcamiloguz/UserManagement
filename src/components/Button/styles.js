import styled from 'styled-components'

export const Buttons =styled.button`
padding:10px 15px;
display:flex;
align-items:center;
box-shadow:0px 3px 6px #ccc;
border:none;
border-radius:6px;
cursor:pointer;
font-size:1.5rem;
font-family:'Roboto', sans-serif;
font-weight:500;
background-color:${props=>props.Info.BgColor ||"#fefefe"};
color:${props=>props.Info.FontColor ||"#fefefe"};
svg{
	margin-right:20px;
}
:hover{
background-color:${props=>props.Info.HoverColor ||"#fefefe"};
box-shadow:0px 6px 6px #ccc;
}
`