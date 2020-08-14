const btnCopy = `<img id="btnCopy" title="Copia os participantes do grupo para a área de transferência" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEUAAAAAr4AAsIAAr4AAr4AAr4AAtoAAr4AAr4AAr4AAroIAtpIAr4AAr4AAr4AAr4AAsIIAr4AAsIEAr4AAroAAsYAAr4AAAADZrHZQAAAAFnRSTlMAEKTx86YOov2WLwdWozDwLaV3qYguPXGT+AAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCAcTIwRLAi4dAAAAeUlEQVQoz72SSw6AIAwFi1URFQVR7n9UUfxAQ+POWUDCkPcSCoCo0L/UTQsXlc+Rtzjud6ofgHKcj1AgCEWKUIsopmJR2AZAIuYoziUnFeYqNVTYJWKpYKP+6HBrxHEd21cUckJzHUJiueOZL332E839iJCXjlYK2AE25iA5kGqb2AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0wN1QxOTozNTowNCswMDowMGna4coAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMDdUMTk6MzU6MDQrMDA6MDAYh1l2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;
const btnDown = `<img id="btnDown" title="Baixa os participantes do grupo em .csv" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAAAAsIAAr4AAr4AAgIAArIAAr4AAsIAAqoAAsIEAr4AAr4AAroYAr4AAr4AAsYkArYAAr4AAr4AAqo4AroEAr4EAsIAAqoAAr4AAuXQAroAAr4AAr4AAroAAr4AAsIAArIMAr4AAr4AAsIEAsIAAr4AAr4AAsIAAsIAAr4AAroEAr4AAsIAAsYAA/wAAsYAAsIAAr4AAsYUAroAAr4AAr4AAsIAAsIAAtIcAr4AAr4AArYQAr4AAr4AAr4EAr4AAr4AAsYAAr4AAroAAr4AAn4AAr4AAr4AAqqoAroAAroAAroAAroEAr4AAqoAAsIEAroAAr4AAr4AAroAAr4EAr4AAsYMAr4AAr4AAs4AAr4AAroEAroIAr4AAs4QAsIAAtoAAr4AAr4AAsIAAsYIAroEAr4EAs4AAroAAr4AAr4IAr4AAsIAAqqoAr4AAsIAAr4AAr4AAsYEAr4AAsIAAsoIAr4AAr4AAtpIAsYAAr4AAr4AAr4AAr4AAAACESFhtAAAAfXRSTlMAWt4wAij7hBhnqNITcMkNMqbACVtptwbTC4hA2W5GRCWJ1XeUymaB56BV/KQ0ARoq3ReL4MJeqhHzzB/1uG/+6SRcUrAIvLsG1DybdawSR+SSxUx/bCeDhhTWTzmCG5cOIP2aMV9JCr7OM7ZUA+73pa9B8cQr+pAHTtzszadVGEkAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AgHETckXUYN7gAAAVlJREFUOMu901dXwjAYBuCwFBUsSi2Ko4oWlVG3DAfitogLFdy4t7h3/rtNQ09ooFz6XnxJm+ckaXoCADAYIYnJDOhYKmAhqLTSoApqQHWNjQJ2CsBaphxw1EFY7ywD2Aa5cC590NjEut3uZn0AW1rbeJ5v1wc4Hf8PPJ04XXpA8OJ0K6M9XK9Pfwl/ICj2mfoZPTAQHBwaRm5k1FwAQmE1Ljai2ugYAeNRnAnnZIzMNhUvWmKa9yvtzKzSeOZUEJlfQAktLmEoJXC7rILkCt7AKtSCNVG7hLROAWjSAitHA58WhDfkkhIw2ETIK4MtArbR5tM2DwKZnV35YU8G+wSkDlC1HxqlxFFWQP1j9BnpExWcnqEaO49bLi6vUPcan2XWcYNjAbfK/7oD90l8YEX3MP6A3ucMj8r4k1gEwPML2dIrA0rkTcgPv398gpIRvwLfuZ/fTP5q/AHPGhplyGp5igAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0wN1QxNzo1NTozNiswMDowMGKZMfMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMDdUMTc6NTU6MzYrMDA6MDATxIlPAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;
const btnPrt = `<img id="btnPrt" title="Preparar para impressão" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEUAAAAAsYAAr4AAr4AAsIAAr4AAr4AA/wAAqqoAr4AAqoAAs4AAr4AAsIAAsIAAr4AAr4EAroEAsYkAr4AAqoAAsIEAr4EAsoMAr4AAr4AAr4AAsIAAr4AAtoAAroAAsIIAsIAAr4AAr4AAmZkAsIAAsIAAr4AAr4AAtIcAroAAr4AAr4AAroMAr4AAr4AAroAAsIAAroAAr4AAr4AAr4AAr4AAsIIAsIAAr4AAAAAfjQdnAAAAOHRSTlMAPrjMx6ZQAQPsDBTLqsTCY08NwAZNeSH530CUmQ5iN2qCNgWngYDcEcHa/imM1pv3oWa93eA9twTW2V8AAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AgLACcL62dUGQAAAMBJREFUOMu909cSgjAQheFVLNiw9waKFTug5/2fzBAvjIFVLxz/qzD7TQaYhOirUmlDKZPN5V/nZgFa6eILKAHlyjNLiGpRAzXlsR7tYTU+ADRbLGg/3qPDgm5Pgj4LaDAcjZrAmAVRE6D0PzC1nWTg2DOxmLvym5KAyJ3TAu8AlrQCm73eYEseD3a0h0f8HIfjCXgHZH8E54vWWQPcjwL5QRCEySAUI/9350G9OLKyCuJXL6pgPve73oxYtyt91R1WSmHqrES+PQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0xMVQwMDozOToxMSswMDowMCPZZ0QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMTFUMDA6Mzk6MTErMDA6MDBShN/4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;

const getElement = setInterval( () => {
    
    if(!document.getElementById('btnDown')){

        const header = document.querySelector('._1D7Lo');
        if(header){
            
            //clearInterval(getElement)
            const button = document.createElement("div")            
            button.addEventListener("click",   () => { getContacts('save') });
            button.innerHTML = `${btnDown}`;        
            header.appendChild(button)            
            
            const divBtnPrint = document.createElement("div")            
            divBtnPrint.addEventListener("click", () => { getContacts('print') });
            divBtnPrint.innerHTML = `${btnPrt}`;        
            header.appendChild(divBtnPrint)            
        
        } 
        
        const div_3X7RF = document.querySelectorAll('._3X7RF');                
        if( div_3X7RF.length ){
            const div_325lp = div_3X7RF[0].parentNode;            
            const div_eJ0yJ_1Mq_e = div_325lp ? div_325lp.parentNode : null;             
            div_eJ0yJ_1Mq_e && div_eJ0yJ_1Mq_e.click();
        }
        
    }
    
    const div_3_cMa_3Whw5 = document.querySelector('._3-cMa._3Whw5');
    if( div_3_cMa_3Whw5 &&  !document.getElementById('btnCopy')){
        console.log('entrou');
        const text = div_3_cMa_3Whw5.innerHTML;
        if(text === 'online' || text === 'clique aqui para dados do contato')
            return;
        
        const container = document.querySelector('._3nq_A');
        if(container){
            
            //clearInterval(getElement)
            const div = container.firstChild;            
            const button = document.createElement("div")            
            button.addEventListener("click",  getText )
            button.innerHTML = `${btnCopy}`;        
            div.appendChild(button);           
        
        }         
    }
    
}, 2000)

function getText(){
    const div_3_cMa_3Whw5 = document.querySelector('._3-cMa._3Whw5');
    let text = div_3_cMa_3Whw5.innerHTML.replace(/,\s/gi,"\n");    
    text = text.replace(/\+55\s|\+|-/gi,"");
    copyToClipboard(text)
}


function getContacts(action){
    
    setHeight('9999999999px').then( () => {

              
        setTimeout( () => {
            
            const div_2FVVk_230FM = document.querySelector('._2FVVk._230FM');
            const div_3FRCZ = div_2FVVk_230FM.lastChild;
            
            //sanitize
            let groupName = (div_3FRCZ && div_3FRCZ.innerHTML) ? div_3FRCZ.innerHTML : 'contatos';
            groupName = groupName.replace(/\<.*\>/gi,"");  
            
            const elements = document.querySelector('.-GlrD._2xoTX');
            const items = elements.childNodes;        
            
            let cards = '';
            let text = 'Número;Administrador;Status;Nome\n'                                 
            for (let item of items){
                
                const div_1 = item.childNodes;              
                const div_eJ0yJ_1Mq_e = div_1[0].childNodes;               
                const [div_325lp, div_2kHpK] = div_eJ0yJ_1Mq_e[0].childNodes;                
                const div_1BjNO = div_325lp.childNodes;
                const div_2goTk = div_1BjNO[0].firstChild;                
                const [div_3dtfX, div_1582E] = div_2kHpK.childNodes;
                const [div_3CneP, div_m60XR]= div_3dtfX.childNodes;                
                const [div_357i8] = (div_3CneP && div_3CneP.childNodes) ? div_3CneP.childNodes : []; 
                const [div_3ko75_5h6Y__3Whw5] = ( div_357i8 && div_357i8.childNodes ) ? div_357i8.childNodes : div_357i8;
                const [div_LwCwJ] = (div_m60XR && div_m60XR.childNodes) ? div_m60XR.childNodes : [];
                const [ div_3tBW6, div_m61XR ] = (div_1582E && div_1582E.childNodes) ? div_1582E.childNodes : [];
                const [ div_3ko75_3Whw5 ] = (div_3tBW6 && div_3tBW6.childNodes) ? div_3tBW6.childNodes : [];
                const [ div_1_1Jb ] = (div_m61XR && div_m61XR.childNodes) ? div_m61XR.childNodes : [];
                const [ div_3Whw5 ] = (div_1_1Jb && div_1_1Jb.childNodes) ? div_1_1Jb.childNodes : [];               
               
                let number = (div_3ko75_5h6Y__3Whw5 && div_3ko75_5h6Y__3Whw5.innerHTML)
                    ? div_3ko75_5h6Y__3Whw5.innerHTML 
                    : div_3ko75_5h6Y__3Whw5.nodeValue;               
                
                number = (typeof number === 'string') ?  number.replace(/\+55\s|\+|-/g,"") : '';                     
                
                let admin = div_LwCwJ ? div_LwCwJ.innerHTML : '';
                admin = admin.replace(/\<.*\>/gi,"");  
                
                const statusPtr = div_3ko75_3Whw5 ? div_3ko75_3Whw5.innerHTML : '';
                let status = div_3ko75_3Whw5 ? div_3ko75_3Whw5.innerHTML : '';     
                status = status.replace(/\<.*\>/g,"");     
                                
                const namePtr = div_3Whw5 ? div_3Whw5.innerHTML : '';     
                let name = div_3Whw5 ? div_3Whw5.innerHTML : '';     
                name = name.replace(/\<.*\>/gi,"");     
                
                const sanitize = `${number};${admin};${status};${name}\n`;
                text += sanitize.replace(/\,|\'|\"|\“|\”/g,"");     
                
                const src = div_2goTk.src || '';
                let srcImageLarge = src.replace('t=s','t=l');
                srcImageLarge = (srcImageLarge === '') 
                    ? 'data:image/png;base64,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'
                    : srcImageLarge;

                const borderColor = admin ? '#000' : 'gray';
                const adminStrong = admin ? '(<b>Administrador</b>)' : '';
                
                cards += `<div style="display: flex; justify-content: start; width: 500px; border: 1px ${borderColor} solid; margin-bottom: 15px; border-radius: 8px; overflow: hidden;">
                <img src="${srcImageLarge}"  height="157">
                <span style="padding: 0 10px;">
                    <p>${number} ${adminStrong}</p>
                    <p>${statusPtr}</p>           
                    <p>${namePtr}</p>
                </span>
                </div>`;
        
            }
            
            setHeight('100%');           

            if(action == 'print'){
                const tela_impressao = window.open('about:blank');
                const total = items.length
                tela_impressao.document.write(`<h2>${groupName} (${total} participantes)</h2>${cards}` );
                //tela_impressao.window.print();
                //tela_impressao.window.close();
            }
            
            if(action == 'save'){
                saveToDataFile(text, groupName)
            }         

        }, 1500);        
    })
    
}

function setHeight(size){
    return new Promise( (resolve) => {

        const containerHack = document.querySelector('._2fpYo');        
        containerHack.style.height = size;

        const check = setInterval( () => {
                      
            if(containerHack.style.height !== size){                
                clearInterval(check);
                resolve();
            }
            
        }, 500);
        
    });
}

function saveToDataFile(text, fileName){
    
    const data =  new TextEncoder('utf-8').encode(text);
    const blob = new Blob(['\uFEFF', data], { type: 'text/csv;charset=utf-8' });

    const a = document.createElement("a");
    const url = URL.createObjectURL(blob);

    a.href = url;
    a.download = `${fileName}.csv`; 
    document.body.appendChild(a);
    a.click();
    
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0);   
   
}

function copyToClipboard(text) {

    navigator.clipboard.writeText(text)
        .then(function() {            
            alert(' Os participantes do grupo\n foram copiados para área de transferência com sucesso!\n :-) izidorio@bento.dev.br')
        }, function(err) {
            alert('Não foi possível copiar os contatos para a área de transferência seu navegador não tem suporte a este recurso. :(')
            console.error('Async: Could not copy text: ', err);
        });    
}