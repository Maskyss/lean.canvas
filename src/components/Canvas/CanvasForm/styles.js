import styled from "styled-components";
import ContentEditable from "react-contenteditable";

const ButtonImg = styled.img`
  padding: 0.5rem;
  background: #323232;
  border: 1px solid #7c7c7c;
`;
const BorderButton = styled.div`
  background: #3e3e3e;
  padding: 1rem;
  display: flex;

  position: absolute;
  display: flex;
  z-index: 10;

  top: ${props => props.top};
  left: ${props => props.left};
`;

const StyledTextArea = styled(ContentEditable)`
  padding: 0 0.5rem;
  width: 100%;
  background: #3e3e3e;
  color: #969696;
  word-break: break-word;
  cursor: text;
  ::selection {
    background: #7d7d7d;
    color: white;
  }
  i,
  u,
  b {
    ::selection {
      background: #7d7d7d;
      color: white;
    }
  }

  b {
    font-weight: 600;
    u,
    i {
      font-weight: 600;
    }
  }

  u,
  i {
    b {
      font-weight: 600;
      i,
      u {
        font-weight: 600;
      }
    }
  }
`;

export { ButtonImg, BorderButton, StyledTextArea };
