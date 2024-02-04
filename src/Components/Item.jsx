import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../Styles/Item.css";

import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CardContainer from "./CardContainer";

function Item({ selectedItem,setSelectedItem }) {
//   console.log(selectedItem);

const [selectedButton, setSelectedButton] = useState("details");

  return (
    <div>
      <Navbar />
      <div className="post-detail">
        <div className="heading-part">
          <Link to="/">
            <button type="button" className="back-btn">
              <KeyboardBackspaceRoundedIcon />
            </button>
          </Link>
          <h1>Post Number #{selectedItem.id}</h1>
        </div>
        <div className="item-detail">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0)40%, rgba(0, 0, 0, 0.8)),url(https://picsum.photos/200?random=${selectedItem.id})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            }}
            className="image"
          >
            <div>
                <h3>{selectedItem.title}</h3>
                <div className="img-icon">
                    <ShareRoundedIcon className="ico"/>
                    <FavoriteBorderRoundedIcon className="ico"/>
                </div>
            </div>
          </div>
          <div className="info">
            <div className="buttons">
                <button type="button" onClick={()=>{setSelectedButton("details")}} style={selectedButton === "details" ? {...activeBtn} : {...normalBtn}}>Details</button>
                <button type="button" onClick={()=>{setSelectedButton("userInfo")}} style={selectedButton === "userInfo" ? {...activeBtn} : {...normalBtn}}>User Info</button>
            </div>
            {
                selectedButton === "details" ? 
                <p>{selectedItem.body}</p> :
                <p>Post Was Posted By {selectedItem.userId}.</p>
            }
          </div>
        </div>
      </div>
      <div className="more-posts">
      <h1 className="more-post-heading">More Posts</h1>
      <CardContainer setSelectedItem={setSelectedItem}/>
      </div>
    </div>
  );
}

const activeBtn ={
    color:"white",
    background:"#F05A22",
    boxShadow: "0px 8px 24px 0px #FFBE9DCF"
}
const normalBtn ={
    color:"black",
    background:"#fff",
    boxShadow: "1px 8px 8px 0px #00000005"

}
export default Item;
