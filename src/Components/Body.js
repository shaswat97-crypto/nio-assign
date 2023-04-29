import React, { useState } from "react";
import coin from "./img/coin.png";
import "./body.css";
import { data } from "./data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import close from "./img/close.png";
import down from './img/down.svg'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  //   p: 4,
  borderRadius: "18px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderImageSource:
    "linear-gradient(to bottom, #3b79d4 -12%, rgba(0, 0, 0, 0) 39%)",
  borderImageSlice: "1",
  backgroundImage:
    "linear-gradient(to bottom, #181627, #181627), linear-gradient(to bottom, #3b79d4 -12%, rgba(0, 0, 0, 0) 39%)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};
function Body({ id, setId }) {
  const [coins, setCoins] = useState(data);
  // const [text, setText] = useState('');
  const [open, setOpen] = React.useState(false);
  const [obj, setObj] = useState(data[0]);
  const [qty, setQty] = useState();
  const [amount, setAmount] = useState();
  const handleQty = (e) =>{
    let amount = +e.target.value;
    let n = (amount/obj.price).toFixed(2);
    // console.log({amount, n})
    setQty(n);
  }
  const handleOpen = () => {
    setOpen(true)
    setQty(0)
    setAmount(0)
  };
  const handleClose = () => {
    setOpen(false);
    setCoins(data);
  };
  const handleChange = (e) => {
    const text = e.target.value;
    if (text) {
      let arr = data.filter((d) => {
        return d.name.toLowerCase().includes(text.toLowerCase());
      });
      setCoins(arr);
    } else {
      setCoins(data);
    }
  };
  const handleSetObj = (obj) => {
    setObj(obj);
    handleClose()
  };
  return (
    <div className="body">
      <div className="imgcont">
        <div className="bheader">
          <div className="bimgcont">
            <img src={obj.image} alt="" />
          </div>
        </div>
        <div className="bodybody">
          <div className="currvalholder">
            <div className="currval">Current value</div>
            <div className="val">&#x20b9; {obj.price}</div>
          </div>
          <div className="objholder" onClick={handleOpen}>
            <div className="objimage">
              <img src={obj.image} alt="" />
            </div>
            <div className="objname">{obj.name}</div>
            <div className="downicon"><img src={down} alt="" /></div>
          </div>
          <div className="modal">
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="modalin">
                  <div onClick={handleClose} className="closebutton">
                    <div>
                      <img className="closeimg" src={close} alt="" />
                    </div>
                  </div>
                  <input
                    onChange={handleChange}
                    placeholder="Search chains"
                    className="binput"
                    type="text"
                  />
                  <div className="listholder">
                    {coins.length > 0 ? (
                      coins.map((coin) => (
                        <div
                          onClick={() => handleSetObj(coin)}
                          className="listitem"
                          key={coin.id}
                        >
                          <div className="listimg">
                            <img src={coin.image} alt="" />
                          </div>
                          <div>{coin.name}</div>
                        </div>
                      ))
                    ) : (
                      <div className="notfound">No coins found</div>
                    )}
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="amountinvestholder">
            <div className="currval">Amount you want to invest</div>
            <input value={amount} onChange={handleQty} className="amountinvest" placeholder="0.00" type="number" />
          </div>
          <div className="estimateholder">
            <div className="currval">Estimate Number of {obj.name} You will Get</div>
            <input
            value={qty}
              disabled={true}
              placeholder="0.00"
              className="amountinvest2"
              type="text"
            />
          </div>
          <button className="bbutton">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
