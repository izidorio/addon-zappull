export function setHeight(size, filter = ".ldL67._1bLj8") {
  return new Promise((resolve) => {
    //div aside direta
    const containerHack = document.querySelector(filter);

    if (containerHack) {
      containerHack.style.height = size;
      const check = setInterval(() => {
        if (containerHack.style.height !== size) {
          clearInterval(check);
          resolve("ok");
        }
      }, 500);
    }
  });
}

export function _copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      alert(
        " Os participantes do grupo\n foram copiados para área de transferência com sucesso!\n :-) izidorio@bento.dev.br"
      );
    },
    function (err) {
      alert(
        "Não foi possível copiar os contatos para a área de transferência seu navegador não tem suporte a este recurso. :("
      );
      console.error("Async: Could not copy text: ", err);
    }
  );
}

export function copyToClipboard(text) {
  // Crie um elemento <textarea> temporário
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // Defina o estilo para torná-lo invisível
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  // Anexe o elemento ao corpo do documento
  document.body.appendChild(textarea);

  // Selecione o conteúdo do <textarea>
  textarea.select();

  // Execute o comando de cópia
  document.execCommand("copy");

  // Remova o elemento <textarea> temporário
  document.body.removeChild(textarea);

  // Exiba uma mensagem de sucesso ou erro
  if (document.queryCommandSupported("copy")) {
    alert("Texto copiado para a área de transferência!");
  } else {
    alert("Seu navegador não suporta a cópia para a área de transferência.");
  }
}

export function saveToDataFile(text, fileName) {
  const data = new TextEncoder("utf-8").encode(text);
  const blob = new Blob(["\uFEFF", data], { type: "text/csv;charset=utf-8" });

  const a = document.createElement("a");
  const url = URL.createObjectURL(blob);

  a.href = url;
  a.download = `${fileName}.csv`;
  document.body.appendChild(a);
  a.click();

  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}

async function filterNumbers(payload) {
  const numbers = [];

  for (let item of payload) {
    try {
      const number = item.number.replace(/\D/g, "");
      if (number !== "") numbers.push(number);
    } catch (error) {
      console.log({ error });
    }
  }

  return numbers;
}

const USER = "";
const PASS = "";
const URL_API = `https://portabilidadecelular.com/painel/consulta_numero_json.php?user=${USER}&pass=${PASS}&numeros=`;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "no-cors",
};
export async function addOperatorToNumbers(payload) {
  const numbers = await filterNumbers(payload);

  console.log({ numbers });
  console.log(encodeURI(`${URL_API}[${numbers}]`));

  fetch(encodeURI(`${URL_API}[${numbers}]`), options)
    .then(function (response) {
      var contentType = response.headers.get("content-type");
      console.log(response);
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function (json) {
          // process your JSON further
          console.log(json);
        });
      } else {
        console.log("Oops, we haven't got JSON!");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
