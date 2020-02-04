import styled from "styled-components";
import { Subtitle } from "../../_popup/mainStyles";

const Access = styled(Subtitle)`
  font-size: 1.2rem;
  @media (max-width:400px){
    margin-bottom:1rem !important
    ;

  }
`;
const TextCode = styled.div`
  font-size: 1.7rem;
  width: 27rem;
  padding-bottom: 1.3rem;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  border-bottom: 1px solid #0e0e0e;
  @media (max-width:600px) {
    width: 15rem;

  }
`;
const DivWithAccess = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: flex-end;
`;
export {  Access, TextCode, DivWithAccess };