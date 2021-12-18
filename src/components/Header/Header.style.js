import styled from 'styled-components'

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #010a13;
  
  @media (min-width: 992px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

export const Container = styled.div`
	display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
	width: 80%;
  padding: 0 0.75rem;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const A = styled.a`
	padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  color: #fff;
`

export const User = styled.div`
	flex-grow: 0;
`
