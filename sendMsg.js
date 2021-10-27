export function sendMsg(token, name, value) {
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key=AAAAW6bQhAY:APA91bGbLAf4KT_ZvwgrObTIxZOUmDNlUl_8PjmjGWoS1dabE1RUMJTc8uJ88hIa3QBr6WALkD-dNPDk9Qu33r6nG8lz0GulLusHlvSC_op23uQ8DjUx88_Rv0UBKuxMbGcAT8omx2bX"
    },
    body: JSON.stringify(
      {
        "to": token,
        "notification": {
          "title": "Coin Price Notice",
          "body": `${name}이 ${value}원에 도달했습니다.`
        }
      }
    )
  })
}

export function sendMsg1(token, name, value) {
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key=AAAAW6bQhAY:APA91bGbLAf4KT_ZvwgrObTIxZOUmDNlUl_8PjmjGWoS1dabE1RUMJTc8uJ88hIa3QBr6WALkD-dNPDk9Qu33r6nG8lz0GulLusHlvSC_op23uQ8DjUx88_Rv0UBKuxMbGcAT8omx2bX"
    },
    body: JSON.stringify(
      {
        "to": token,
        "notification": {
          "title": "Coin Price Notice",
          "body": `${name}이 ${value}%에 급등했습니다.`
        }
      }
    )
  })
}

export function sendMsg2(token, name, value) {
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key=AAAAW6bQhAY:APA91bGbLAf4KT_ZvwgrObTIxZOUmDNlUl_8PjmjGWoS1dabE1RUMJTc8uJ88hIa3QBr6WALkD-dNPDk9Qu33r6nG8lz0GulLusHlvSC_op23uQ8DjUx88_Rv0UBKuxMbGcAT8omx2bX"
    },
    body: JSON.stringify(
      {
        "to": token,
        "notification": {
          "title": "Coin Price Notice",
          "body": `${name}이 ${value}%에 급락했습니다.`
        }
      }
    )
  })
}