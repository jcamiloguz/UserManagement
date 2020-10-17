import styled from 'styled-components'

export const Buttons =styled.button`
padding:15px 20px;
display:flex;
align-items:center;
box-shadow:0px 3px 6px #ccc;
border:none;
border-radius:6px;
font-size:2rem;
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