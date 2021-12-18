import styled from 'styled-components'

export const StyledTask = styled.div`
  border-radius: 15px;
	padding: 10px;
	margin: 5px 0;
	background-color: rgba(255, 255, 255, 0.3);
	cursor: grab;
  
  &:active {
 		cursor: grabbing;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const Header = styled.header`
	display: flex;
	align-items: center;
`

export const Title = styled.p`
	flex: 1;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin: 0;
	${props => props.hidden && 'display: none'};
`

export const Date = styled.span`
	font-size: .8em;
`

export const Ratio = styled.div`
	float: right;
	display: flex;
	gap: 5px;
`

export const Input = styled.input`
		border: 2px solid #FFFFFF99;
		height: 24px;
    font-size: 16px;
    width: calc(100% - 10px);
    flex: 1;
    background-color: rgba(255,255,255,0.07);
    color: #FFFFFF;
    border-radius: 10px;
    margin: 0;
    padding: 2px 8px;
    ${props => props.hidden && 'display: none'};
`

const Button = styled.button`
	border: none;
	background: none;
	text-align: center;
	width: 25px;
	height: 25px;
	line-height: 24px;
	font-size: 24px;
	border-radius: 50%;
	cursor: pointer;
	font-weight: 600;
	
	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
`

const SmallButton = styled(Button)`
	font-size: 18px;
`

export const Del = styled(SmallButton)`
  ${props => props.hidden && 'display: none'};
  
	&:hover {
		color: red;
	}
`

export const Edit = styled(SmallButton)`
  ${props => props.hidden && 'display: none'};
	transform: rotate(180deg);
`

export const Done = styled(SmallButton)`
  ${props => props.hidden && 'display: none'};
	&:hover {
		color: green;
	}
`

export const Min = styled(Button)`
	color: red;
`

export const Max = styled(Button)`
	color: green;
`


