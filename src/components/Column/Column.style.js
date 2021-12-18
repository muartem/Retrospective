import styled from 'styled-components'

export const StyledColumn = styled.div`
  background-color: ${props => props.color || '#FFFFFF22'};
	border-radius: 20px;
	padding: 15px;
	min-width: 240px;
	width: 22%;
	max-width: 270px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	
	@media (max-width: 992px) {
    gap: 10px;
    padding: 10px;
    border-radius: 15px;
  }
`

export const Header = styled.header`
		display: ${props => props.hidden ? 'none' : 'flex'} ;
		align-items: center;
		gap: 5px;
`

export const Counter = styled.h2`
		text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.4em;
    margin: 0;
`

export const Title = styled(Counter)`
		flex: 1;
		
		& > input {
			width: 130px;
			
		}
`

export const Done = styled.div`
		font-size: 1em;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 600;
    
    &:hover{
    	background-color: rgba(255, 255, 255, 0.5);
    }
`

export const Edit = styled(Done)`
		flex: 0;
		min-width: 25px;
		transform: rotate(180deg);
`

export const Add = styled.div`
		border-radius: 15px;
    padding: 5px 3px 10px 5px;
    margin: 5px 0;
    background-color: rgba(255, 255, 255, 0.3);
		text-align: center;
    font-size: 2em;
    line-height: 22px;
    cursor: pointer;
    display: ${props => props.hidden ? 'none' : 'flex'} ;
    align-items: center;
    justify-content: center;
		gap: 3px;
    
    &:hover{
   		background-color: rgba(255, 255, 255, 0.5);
    }
`

export const TaskList = styled.div`
		display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: auto;
`

export const AddBtn = styled.div`
		width: 25px;
    height: 25px;
    font-size: 24px;
    margin: 2px;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    
    &:hover{
   		background-color: rgba(255, 255, 255, 0.5);
    }
`

export const Input = styled.input`
		border: 2px solid #FFFFFF99;
		height: 30px;
    font-size: 18px;
    width: calc(100% - 10px);
    flex: 1;
    background-color: rgba(255,255,255,0.07);
    color: #FFFFFF;
    border-radius: 20px;
    margin: 5px 0 0;
    padding: 2px 10px;
`
export const ColorInput = styled(Input)`
		max-width: 30px;
    padding: 4px;
    border: none;
    border-radius: 0;
`
