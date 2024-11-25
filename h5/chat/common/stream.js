/* eslint-disable*/
// import {headlePreText} from './../utils/index'
// const baseURL = import.meta.env.VITE_GPT_BASE_URL

// import { getToken } from '@/utils'

export function headlePreText(data) {
  let res = data;
  const regex = /\n+/g;
  try {
    let text = data?.text.replace(regex, "\n");
    res.data = text;
  } catch (error) {}
  return res;
}

export function createStreamApi(url, data, options) {
  let { signal, abort } = addAbortControl();
  let token = localStorage.getItem("token");
  fetch(`${url}`, {
    method: "POST",
    mode: "cors",
    signal,
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => handleFetchResponse(res, options))
    .catch(err => options.error(err));
  return abort;
}
export function askApi(data, options) {
  return createStreamApi("/api/app/aichat/chat/ask", data, options);
}


async function handleFetchResponse(response, { change, end, error } = {}) {
  let { body, status } = response;
  if (status != 200) {
    error(response.statusText);
    return;
  }
  if (body) {
    const reader = body.getReader();
    let processDataFunc = createProcessFun({ change, end, error }, reader);
    reader
      .read()
      .then(processDataFunc)
      .catch(errorRes => {
        error(errorRes);
      });
  }
}
function addAbortControl() {
  const controller = new AbortController();
  const signal = controller.signal;
  return {
    signal,
    abort() {
      controller.abort();
    }
  };
}
function checkIsVaild(text) {
  let isVaild = true,
    msg = "",
    needSpecial = false;
  try {
    let res = JSON.parse(text);
    let { isSuccess, resultMsg, code } = res;
    if (!isSuccess) {
      isVaild = false;
      msg = resultMsg;
      needSpecial = [1001, 1000].includes(code);
    }
  } catch (e) {}
  return {
    isVaild,
    msg,
    needSpecial
  };
}
function createProcessFun({ change, end, error } = {}, reader) {
  let text = "";
  let tempText = "";
  const nextLineFlag = "\n\n",
    splitRegx = /\n\n(?=data:)/g;
  const DataDoneList = ["data:[DONE]", `data:[DONE]${nextLineFlag}`];
  const decoder = new TextDecoder("utf-8");
  function processData(result) {
    let { value, done } = result;
    if (done) {
      tempText = headleBigTick(tempText);
      let { isVaild, msg, needSpecial } = checkIsVaild(tempText);
      if (isVaild) {
        end(text);
      } else {
        error(msg, true, needSpecial);
      }
      return;
    }
    let currentText = decoder.decode(value, { stream: true });
    appendText(currentText);
    reader
      .read()
      .then(processData)
      .catch(errorRes => {
        error(errorRes);
      });
  }
  function callChange(item) {
    let value = item.replace(/^data:/, "");
    if (!checkIsLastDoneData(item)) {
      if (checkIsNormalMessage(item)) {
        change(headlePreText(JSON.parse(value)));
      }
    } else {
      change({
        id: null
      });
    }
  }
  function headleBigTick(tempText) {
    if (checkHasTotalMessage(tempText)) {
      let infoList = tempText.split(splitRegx);
      infoList.forEach(item => {
        callChange(item);
      });
      if (infoList.length > 0) {
        let lastStr = infoList[infoList.length - 1];
        if (!checkDataIsTotalInfo(lastStr)) {
          tempText = lastStr;
        } else {
          tempText = "";
        }
        return tempText;
      }
    } else {
      return tempText;
    }
  }
  function checkHasTotalMessage(msg) {
    return splitRegx.test(msg) || checkIsLastDoneData(msg);
  }
  function checkIsLastDoneData(data) {
    return DataDoneList.includes(data);
  }
  function checkIsNormalMessage(data) {
    let regx = /^data:{.*}$/;
    return regx.test(data);
  }
  function checkDataIsTotalInfo(str) {
    return checkIsLastDoneData(str) || checkIsNormalMessage(str);
  }
  function appendText(newText) {
    text += newText;
    tempText = headleBigTick(tempText + newText);
  }
  return processData;
}
