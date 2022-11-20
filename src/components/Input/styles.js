import styled from "styled-components";

export const InputContainer = styled.div`
   max-width: 275px;
   width: 100%;
   height: 30px;
   border-bottom: 1px solid #3B3450;

   display: flex;
   align-items: center;
   margim-bottom: 20px;
`


export const IconContainer = styled.div`
   margin-right: 10px;
`

export const InputText = styled.input`
   background: transparent;
   color: #FFFFFF;
   border: 0;
   height: 30px;
   width: 100%;
`

export const ErrorText = styled.p`
   color: #FF0000;
   font-size: 12px;
   margin: 5px 0;
`