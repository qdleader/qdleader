import { onBeforeUnmount, onMounted } from "vue";
// import {
//   openNormalWeb,
//   openCaseWeb,
//   getLawUrlLink
// } from "@/pages/commonGpt/utils/index.js";
export default function (domRef) {
  function ClickEvent(event) {
    if (event.target.tagName.toLowerCase() === "a") {
      event.preventDefault();
      if (event.target.href) {
        // openNormalWeb(event.target.href);
      }
    }
    switch (event.target.tagName.toLowerCase()) {
      case "span":
        actionSpanElement(event.target);
        break;
      default:
        break;
    }
  }
  function actionSpanElement(element) {
    let type = element.getAttribute("data-type");
    if (type == "case") {
      let jid = element.getAttribute("data-jid");
      if (jid) {
        // openCaseWeb({
        //   jid
        // });
      }
    }
    if (type == "law") {
      let lid = element.getAttribute("data-lid");
      if (lid) {
        let provision = element.getAttribute("data-provision");
        // getLawUrlLink({
        //   lid,
        //   provision
        // });
      }
    }
  }
  onMounted(() => {
    domRef.value.addEventListener("click", ClickEvent);
  });
  onBeforeUnmount(() => {
    domRef.value.removeEventListener("click", ClickEvent);
  });
}
