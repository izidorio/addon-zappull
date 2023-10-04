import { setHeight } from "./utils.js";
import {
  WRAPPER_PARTICIPANTES,
  NM_GRUPO,
  DT_CREATE_GRUPO,
  DIV_MODAL,
  WRAPPER_CARD_PARTICIPANTES,
  CARD_PARTICIPANTE,
} from "./_constants.js";

export function nameGroup() {
  // div > span com nome do grupo
  try {
    const span_name_group = document.querySelector(NM_GRUPO);
    const title = span_name_group.innerText;

    return title.replace(/\<.*\>/gi, "");
  } catch (error) {
    return "error-nome-grupo";
  }
}

export function dateCreatedGroup() {
  try {
    // span com a data de criação do grupo f8jlpxt4 e4qy2s3t pm5hny62 e1gr2w1z
    const span_date_group = document.querySelector(DT_CREATE_GRUPO).firstChild;
    return span_date_group.textContent;
  } catch (error) {
    return "error-data-grupo";
  }
}

// export function getTotalMembers() {
//   try {
//     const span_total_group = document.querySelector("._3Bg5b.VWPRY._1lF7t").firstChild;
//     return span_total_group.textContent;
//   } catch (error) {
//     return "error-data-grupo";
//   }
// }

export async function readGroup() {
  await setHeight("9999999999px", DIV_MODAL);

  return new Promise(async (resolve) => {
    setTimeout(() => {
      // div que envolve o avatar e os dados dos participantes do grupo dentro do modal _3YS_f _2A1R8
      const box = document.querySelector(WRAPPER_CARD_PARTICIPANTES);

      // div que envolve o avatar e os dados dos participantes do grupo _199zF _3j691
      let elements = box.querySelectorAll(CARD_PARTICIPANTE);

      let contacts = [];

      for (let item of elements) {
        // wrappers: avatar e conteúdo
        const [div_wrapper_avatar, div_wrapper_content] = item.childNodes;

        // wrapper image < flex < div_wrapper_avatar
        const [div_wrapper_flex_avatar] = div_wrapper_avatar.childNodes;
        const [div_wrapper_rondend] = div_wrapper_flex_avatar.childNodes;
        const [img] = div_wrapper_rondend.childNodes;

        // wrappers das linhas < div_wrapper_content
        const [div_wrapper_title, div_wrapper_status] = div_wrapper_content.childNodes;

        // wrappers: nome administrador
        const [span_phone, span_status] = div_wrapper_title.childNodes;

        const [span_status_desc, span_status_name] = div_wrapper_status
          ? div_wrapper_status.childNodes
          : ["", ""];

        const admin = !!span_status;

        let status = span_status_desc.textContent || "";
        status = status.replace(/\<.*\>/g, "");

        let name = span_status_name.textContent || "";
        name = name.replace(/\<.*\>/gi, "");

        let src = "";
        try {
          src = img.src.replace("t=s", "t=l");
        } catch (error) {}

        let number = span_phone.textContent || "";
        number = typeof number === "string" ? number.replace(/\+55\s|\+|-/g, "") : "";

        contacts.push({
          number,
          admin,
          status,
          name,
          avatar: src,
        });
      }

      resolve(contacts);
      setHeight("100%", DIV_MODAL);
    }, 1500);
  });
}

export function readListParticipants() {
  // div com a lista de números/nomes dos participantes do grupo
  try {
    const classContainerParticipantes = document.querySelector(WRAPPER_PARTICIPANTES).firstChild;
    let title = classContainerParticipantes.textContent.replace(/,\s/gi, "\n");
    title = title.replace(/\+55\s|\+|-/gi, "");
    return title;
  } catch (error) {
    return "erro-participantes";
  }
}
