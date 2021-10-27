const database = firebase.database();

async function getToken(user) {
  const tokenRef = database.ref('users/qwe/key');
  await tokenRef.get().then((snapshot) => {
    if (snapshot.exists()) {
      user["token"] = snapshot.val()["userToken"];
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

async function getNotice(user) {
  const noticeRef = database.ref('users/qwe/notice/userNotice');
  await noticeRef.get().then((snapshot) => {
    if (snapshot.exists()) {
      const data = JSON.parse(snapshot.val());
    user["notice"] = data;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

export async function getData() {
  const user = {};
  await getToken(user);
  await getNotice(user);
  return user;
}