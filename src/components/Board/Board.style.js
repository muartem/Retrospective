import styled from 'styled-components'

export const StyledBoard = styled.div`
  position: relative;
    width: 80%;
    height: calc(100vh - 184px);
    margin: 40px auto;

    background-color: #010a13e3;
    border-radius: 50px;
    padding: 24px;
    color: #FFFFFF;

    user-select: none;
  
  @media (max-width: 992px) {
    width: 90%;
    padding: 16px;
    border-radius: 16px;
    height: calc(100vh - 116px);
    margin: 16px auto;
  }
`

export const Columns = styled.div`
		margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    column-gap: 30px;
    border-radius: 35px;
    height: calc(100% - 48px);
    padding: 16px;
`

export const Add = styled.button`
		position: absolute;
    bottom: 32px;
    right: 32px;
    text-align: center;
    line-height: 36px;
    font-size: 36px;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    border: none;
    outline: none;
    
    &:hover{
    	background-color: rgba(255, 255, 255, 0.5);	
    }
`
