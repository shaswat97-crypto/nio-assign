import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "./Header";
import Body from "./Body";
import axios from "axios";

function Home() {
  const [coins, setCoins] = useState([]);
  const [id, setId] = useState([]);
//   useEffect(() => {
//     async function ftechCoins() {
//       const res = await axios.get(
//         "https://api.coingecko.com/api/v3/search/trending"
//       );
//       const data = await res.data;
//       setCoins(data.coins);
//     }
//     ftechCoins();
//   },[]);

//   useEffect(() => {
//     async function ftechCoins() {
//       const res = await axios.get(
//         "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest"
//       ,  {headers: {
//         'Authorization': `Bearer e73cb4d3-f319-44eb-afb1-e888424f9814`
//       }});
//       const data = await res.data;
//       setCoins(data.coins);
//     }
//     ftechCoins();
//   },[]);

  return (
    <div className="main">
      <Header />
      {coins && <Body id={id} setId={setId} />}
    </div>
  );
}

export default Home;
