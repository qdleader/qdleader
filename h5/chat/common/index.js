/* eslint-disable */
export { getUuid } from "./../../caseGpt/utils/index";
import { doAlphaAction } from "./../../caseGpt/utils/chatWithAlpha";
import useUserInfoStore from "@/pages/alphaGpt/homePage/store/userInfo.js";
import { checkIsMiniEnv } from "./env.js";
import { copy } from "@/pages/alphaGpt/homePage/utils/index";
import { copySourceLink } from "@/pages/alphaGpt/homePage/components/contentInner/smartAdvisor/libs/highlightPlugins/utils/createSourceRefVnode";
function getUserIsGType() {
  const userInfoStore = useUserInfoStore();
  return userInfoStore.getUserTypeIsGType;
}
export function getLawUrlLink(law) {
  // {
  //   lid:string,
  //   provision?:string,
  // }
  return openLawWeb({
    lid: law.lid,
    fullName: law?.provision
  });
}
export function openNormalWeb(url) {
  //  url:string
  if (checkIsMiniEnv()) {
    jumpToMiniWeb(url);
    return Promise.resolve();
  }
  if (window.parent == window) {
    window.open(url, "_blank");
  } else {
    return doAlphaAction({
      data: {
        name: "$window",
        path: ["open"],
        params: [url, "_blank"]
      }
    });
  }
}
export function openJudicialViewDetailWeb(params) {
  // {
  //   vid:string,
  //   query?:string
  // }
  //司法观点
  let url = "app.tool.judicialView.detail";
  if (getUserIsGType()) {
    url = "app.AlphaGPT.judicialView";
  }
  return openNewWebByIlawWeb(url, params);
}
export function openJudicialViewListWeb(params) {
  // {
  //   queryId: string,
  //   inputvalue?:'',
  //   query?:'[]'
  // }
  //司法观点列表
  return openNewWebByIlawWeb("app.tool.judicialView", params);
}
export function openCaseWeb(params) {
  // {
  //   jid:string,
  //   query?:string
  // }
  let caseState = "app.tool.result.detail";
  if (getUserIsGType()) {
    caseState = "app.AlphaGPT.case";
  }
  return openNewWebByIlawWeb(caseState, params);
}
export function openArticleWeb(params) {
  // {
  //   aid:string
  // }
  return openNewWebByIlawWeb("app.tool.article.detail", params);
}
export function openLawWeb(params) {
  // {
  //   lid:string,
  //   fullName?:string,
  // }
  if (getUserIsGType() && !checkIsMiniEnv()) {
    return Promise.resolve();
  }
  return openNewWebByIlawWeb("app.tool.lawsResult.detail", params);
}
export function openNewWebByIlawWeb(url, params = {}) {
  if (checkIsMiniEnv()) {
    jumpToBigDataMini(url, params);
    return Promise.resolve();
  }
  return doAlphaAction({
    data: {
      name: "$state",
      path: ["href"],
      params: [url, params]
    }
  }).then(res => {
    let url = res.data;
    doAlphaAction({
      data: {
        name: "$window",
        path: ["open"],
        params: [url, "_blank"]
      }
    });
  });
}
function checkUrlIsAlphaAriticle(url) {
  return url.includes("alphalawyer.cn") && url.includes("article");
}
function getAidByUrl(url) {
  return url.split("/").pop();
}
export function jumpToMiniWeb(url) {
  if (url.includes("mp.weixin.qq.com")) {
    copySourceLink(url);
    // url = url.replace('http://','https://')
    // wx.miniProgram.navigateTo({
    //   url:'/pages/webShow/webShow?url='+encodeURIComponent(url)
    // })
  } else {
    //https://alphalawyer.cn/#/app/tool/article/%7B%5B%5D,%7D/detail/bdab2e88f11b28ae73c98fd70ec6db50
    if (checkUrlIsAlphaAriticle(url)) {
      let aid = getAidByUrl(url);
      openArticleWeb({
        aid
      });
    } else {
      copySourceLink(url);
    }
  }
}
export function jumpToBigDataMini(url, params) {
  wx.miniProgram.navigateTo({
    url: `/pages/webShow/webShow?state=${url}&params=${JSON.stringify(params)}`
  });
}
