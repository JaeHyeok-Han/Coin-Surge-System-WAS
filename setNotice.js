import { sendMsg, sendMsg1, sendMsg2 } from "./sendMsg.js";

async function n1(token, coin, val, a) {
  let co;
  await fetch(`https://api.upbit.com/v1/candles/minutes/1?market=${coin}&count=1`)
    .then((jsonres) => jsonres.json())
    .then((res) => {
      co = res[0];
    })
  if(co["trade_price"] >= val) {
    sendMsg(token, coin, val);
    clearInterval(a);
  } else {
  }
}

async function n2(token, coin, val, a) {
  let co;
  await fetch(`https://api.upbit.com/v1/candles/minutes/1?market=${coin}&count=3`)
    .then((jsonres) => jsonres.json())
    .then((res) => {
      co = res[0];
    })
  const high = co["high_price"];
  const low = co["low_price"];
  const now = co["trade_price"];
  const per1 = Math.floor((now - low) / low * 1000) / 10;
  const per2 = Math.floor((high - now) / now * 1000) / 10;
  if(per1 >= val) {
    sendMsg1(token, coin, val);
    clearInterval(a);
  } else if(per2 >= val) {
    sendMsg2(token, coin, val);
    clearInterval(a);
  } else {
  }
}

export async function setNotice(token, notice) {
  let {s: type, i: coin, v: val} = notice;

  if(type === "1") {
    const a = setInterval(() => {n1(token, coin, val, a)}, 1000);
    
  } else if(type === "2") {
    const a = setInterval(() => {n2(token, coin, val, a)}, 1000);
  } else {
    console.log("알립 타입 오류");
  }
}