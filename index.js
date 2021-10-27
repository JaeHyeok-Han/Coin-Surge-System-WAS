import { getData } from "./getData.js";
import { setNotice } from "./setNotice.js"

getData().then((user) => {
  const token = user["token"];
  user["notice"].forEach((ele) => {
    setNotice(token, ele);
  });
});