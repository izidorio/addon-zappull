import { saveCsv, preview, contactsToClipboard } from "./handle.js";
import { WRAPPER_PARTICIPANTES, DIV_MODAL } from "./_constants.js";

const btnCopy = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /> </svg>`;
const btnPrint = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /> </svg>`;
const BREAK = "add-zappull-break";

const divBtnCSV = document.createElement("div");
divBtnCSV.setAttribute("id", "btnDown");
divBtnCSV.setAttribute("style", "display: flex; height: 24px; cursor: pointer");
divBtnCSV.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /> </svg>`;
divBtnCSV.addEventListener("click", saveCsv);

const divBtnPrint = document.createElement("div");
divBtnPrint.setAttribute("id", "btnPrt");
divBtnPrint.setAttribute("style", "display: flex; height: 24px");
divBtnPrint.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /> </svg>`;
divBtnPrint.addEventListener("click", preview);

const setButtons = setInterval(() => {
  if (!document.getElementById(BREAK)) {
    const btnMais = document.querySelectorAll("._2nY6U._3A-iD");
    const content = btnMais.length > 0 ? btnMais[btnMais.length - 1] : null;

    if (content) {
      const [, containerBtn] = content.childNodes;
      const [containerMais] = containerBtn.childNodes;
      const [txtMais] = containerMais.childNodes;
      const text = String(txtMais.textContent || "");

      if (text.match(/mais/g) & (1 == 2)) {
        containerBtn.click();

        let i = 0;
        let scrollDow = setInterval(() => {
          // classe do container dos contatos para rolar
          let box = document.querySelector(".KPJpj");

          i++;
          const height = i * 7500;

          if (box && box.scrollTo) {
            // box.scrollTo({top: height, behavior: 'smooth'});
          }

          if (!box || i === 3) {
            // containerDadosGrupo.appendChild(divBtnPrint)
            clearInterval(scrollDow);
          }
        }, 1500);
      }
    }

    // classe do container Dados do grupo
    const containerDadosGrupo = document.querySelector("._1FrBz");

    if (containerDadosGrupo) {
      if (containerDadosGrupo.innerHTML && containerDadosGrupo.innerHTML === "Dados do contato")
        return;

      const ctlBreak = document.createElement("div");
      ctlBreak.setAttribute("id", BREAK);
      containerDadosGrupo.appendChild(ctlBreak);

      containerDadosGrupo.setAttribute("style", "display: flex; gap: 8px;");

      //clearInterval(getElement)

      // controlar a quantidade de inscritos no grupo
      const [subscribs] = document.querySelectorAll(
        ".i5tg98hk.f9ovudaz.przvwfww.gx1rr48f.shdiholb.phqmzxqs.gtscxtjd.ajgl1lbb.thr4l2wc.cc8mgx9x.eta5aym1.d9802myq.e4xiuwjv"
      );
      const [linkSeeAll] = document.querySelectorAll(
        ".i5tg98hk.f9ovudaz.przvwfww.ddw6s8x9.shdiholb.phqmzxqs.pm5hny62.ajgl1lbb.thr4l2wc.cc8mgx9x.eta5aym1.d9802myq.e4xiuwjv.q1n4p668.ln8gz9je.p357zi0d.gndfcl4n.os03hap6"
      );

      try {
        const countSubscrib = +subscribs.innerText.replace(/\D/g, "");

        if (countSubscrib < 19) {
          containerDadosGrupo.appendChild(divBtnPrint);
          containerDadosGrupo.appendChild(divBtnCSV);
        } else {
          linkSeeAll.click();
        }
      } catch (error) {
        console.log({ error });
      }
    }
  }

  // classe do container que guarda os participantes "div[data-testid='chat-subtitle']"
  const wrapper_participantes = document.querySelector(WRAPPER_PARTICIPANTES).firstChild;

  //p357zi0d r15c9g6i g4oj0cdv ovllcyds l0vqccxk pm5hny62

  if (wrapper_participantes && !document.getElementById("btnCopy")) {
    const text = wrapper_participantes.innerHTML;

    if (text === "online" || text === "clique para dados do grupo") return;

    if (wrapper_participantes) {
      // clearInterval(getElement)

      const button = document.createElement("div");
      button.setAttribute("id", "btnCopy");
      button.setAttribute(
        "style",
        "display: flex; height: 18px; position: fixed; top: 30px; right: 112px;"
      );
      button.innerHTML = `${btnCopy}`;
      button.addEventListener("click", contactsToClipboard);
      wrapper_participantes.appendChild(button);

      // const div = wrapper_participantes.firstChild;
      // div.appendChild(button);
    }
  }

  // modal

  // const header = document.querySelector("header.boajuire");
  const divModal = document.querySelector(DIV_MODAL);
  const header = divModal.querySelector("header");

  if (header && !document.getElementById("btnPrtModal")) {
    const button = document.createElement("div");
    button.setAttribute("id", "btnPrtModal");
    button.setAttribute(
      "style",
      "display: flex; height: 24px; margin:0 5px 0 -65px; cursor: pointer"
    );
    button.innerHTML = `${btnPrint}`;

    button.addEventListener("click", preview);
    header.appendChild(button);
    header.appendChild(divBtnCSV);
  }
}, 2000);

export default setButtons;
