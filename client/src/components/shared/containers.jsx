import styled from "styled-components";

export const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const TitleContainer = styled(FlexContainer)`
  justify-content: space-between;
  margin-bottom: 2em;
`

export const StepsContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 2em;
`