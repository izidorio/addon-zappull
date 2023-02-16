import { setHeight } from "./utils.js";

export function nameGroup() {
  // div > span com nome do grupo
  try {
    const span_name_group = document.querySelector("._21nHd").firstChild;
    const title = span_name_group.innerHTML;

    return title.replace(/\<.*\>/gi, "");
  } catch (error) {
    return "error-nome-grupo";
  }
}

export function dateCreatedGroup() {
  try {
    // span com a data de criação do grupo
    const span_name_group = document.querySelector("._3Bg5b.VWPRY._1lF7t").firstChild;
    return span_name_group.textContent;
  } catch (error) {
    return "error-data-grupo";
  }
}

export function getTotalMembers() {
  try {
    // span com a data de criação do grupo
    const span_name_group = document.querySelector("._3Bg5b.VWPRY._1lF7t").firstChild;
    return span_name_group.textContent;
  } catch (error) {
    return "error-data-grupo";
  }
}

export async function readGroup() {
  //g6kkip0l p357zi0d f8m0rgwh ppled2lx tkdu00h0 gfz4du6o r7fjleex jv8uhy2r lhggkp7q qq0sjtgm ln8gz9je _3cjY2 copyable-area

  // div que envolve o avatar e os dados dos participantes do grupo
  const WRAPPER_SUBSCRIBS = "._3cjY2.copyable-area";
  await setHeight("9999999999px", WRAPPER_SUBSCRIBS);

  return new Promise(async (resolve) => {
    setTimeout(() => {
      const box = document.querySelector("._3YS_f._2A1R8");

      // div que envolve o avatar e os dados dos participantes do grupo
      let elements = box.querySelectorAll("._199zF._3j691");

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
      setHeight("100%", ".nBIOd.tm2tP");
    }, 1500);
  });
}

export function readListParticipants() {
  // div com a lista de números/nomes dos participantes do grupo
  try {
    const classContainerParticipantes = document.querySelector(
      "div[data-testid='chat-subtitle']"
    ).firstChild;
    let title = classContainerParticipantes.textContent.replace(/,\s/gi, "\n");
    title = title.replace(/\+55\s|\+|-/gi, "");
    return title;
  } catch (error) {
    return "erro-participantes";
  }
}