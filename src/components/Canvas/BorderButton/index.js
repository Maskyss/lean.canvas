import React from "react"; 
import { Button, BorderButton } from "../styles";
import trash from "../../../static/trash.svg";


const BorderBtn = ({ _toggleVisibility, share, deleteVisible, sendPdf, style ,id}) => {

return(
    <BorderButton style={style} id={id}
          >
            <Button
              black={true}
              onClick={e => _toggleVisibility(e, share, "share")}
              style={{ marginLeft: "0" }}
            >
              Share
            </Button>
            <Button onClick={e => _toggleVisibility(e, sendPdf, "sendPdf")}>
              Send PDF
            </Button>
            <Button
              black={true}
              onClick={e => _toggleVisibility(e, deleteVisible, "delete")}
              className="trash"
            >
              <img src={trash} />
            </Button>
          </BorderButton>
)
}
export default BorderBtn;
