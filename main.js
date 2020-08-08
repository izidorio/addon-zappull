const btnCopy = `<img id="btnCopy" title="Copia os participantes do grupo para a área de transferência" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEUAAAAAr4AAsIAAr4AAr4AAr4AAtoAAr4AAr4AAr4AAroIAtpIAr4AAr4AAr4AAr4AAsIIAr4AAsIEAr4AAroAAsYAAr4AAAADZrHZQAAAAFnRSTlMAEKTx86YOov2WLwdWozDwLaV3qYguPXGT+AAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCAcTIwRLAi4dAAAAeUlEQVQoz72SSw6AIAwFi1URFQVR7n9UUfxAQ+POWUDCkPcSCoCo0L/UTQsXlc+Rtzjud6ofgHKcj1AgCEWKUIsopmJR2AZAIuYoziUnFeYqNVTYJWKpYKP+6HBrxHEd21cUckJzHUJiueOZL332E839iJCXjlYK2AE25iA5kGqb2AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0wN1QxOTozNTowNCswMDowMGna4coAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMDdUMTk6MzU6MDQrMDA6MDAYh1l2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;
const btnDown = `<img id="btnDown" title="Baixa os participantes do grupo em .csv" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAAAAsIAAr4AAr4AAgIAArIAAr4AAsIAAqoAAsIEAr4AAr4AAroYAr4AAr4AAsYkArYAAr4AAr4AAqo4AroEAr4EAsIAAqoAAr4AAuXQAroAAr4AAr4AAroAAr4AAsIAArIMAr4AAr4AAsIEAsIAAr4AAr4AAsIAAsIAAr4AAroEAr4AAsIAAsYAA/wAAsYAAsIAAr4AAsYUAroAAr4AAr4AAsIAAsIAAtIcAr4AAr4AArYQAr4AAr4AAr4EAr4AAr4AAsYAAr4AAroAAr4AAn4AAr4AAr4AAqqoAroAAroAAroAAroEAr4AAqoAAsIEAroAAr4AAr4AAroAAr4EAr4AAsYMAr4AAr4AAs4AAr4AAroEAroIAr4AAs4QAsIAAtoAAr4AAr4AAsIAAsYIAroEAr4EAs4AAroAAr4AAr4IAr4AAsIAAqqoAr4AAsIAAr4AAr4AAsYEAr4AAsIAAsoIAr4AAr4AAtpIAsYAAr4AAr4AAr4AAr4AAAACESFhtAAAAfXRSTlMAWt4wAij7hBhnqNITcMkNMqbACVtptwbTC4hA2W5GRCWJ1XeUymaB56BV/KQ0ARoq3ReL4MJeqhHzzB/1uG/+6SRcUrAIvLsG1DybdawSR+SSxUx/bCeDhhTWTzmCG5cOIP2aMV9JCr7OM7ZUA+73pa9B8cQr+pAHTtzszadVGEkAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AgHETckXUYN7gAAAVlJREFUOMu901dXwjAYBuCwFBUsSi2Ko4oWlVG3DAfitogLFdy4t7h3/rtNQ09ooFz6XnxJm+ckaXoCADAYIYnJDOhYKmAhqLTSoApqQHWNjQJ2CsBaphxw1EFY7ywD2Aa5cC590NjEut3uZn0AW1rbeJ5v1wc4Hf8PPJ04XXpA8OJ0K6M9XK9Pfwl/ICj2mfoZPTAQHBwaRm5k1FwAQmE1Ljai2ugYAeNRnAnnZIzMNhUvWmKa9yvtzKzSeOZUEJlfQAktLmEoJXC7rILkCt7AKtSCNVG7hLROAWjSAitHA58WhDfkkhIw2ETIK4MtArbR5tM2DwKZnV35YU8G+wSkDlC1HxqlxFFWQP1j9BnpExWcnqEaO49bLi6vUPcan2XWcYNjAbfK/7oD90l8YEX3MP6A3ucMj8r4k1gEwPML2dIrA0rkTcgPv398gpIRvwLfuZ/fTP5q/AHPGhplyGp5igAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0wN1QxNzo1NTozNiswMDowMGKZMfMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMDdUMTc6NTU6MzYrMDA6MDATxIlPAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;

const getElement = setInterval( () => {
    
    if(!document.getElementById('btnDown')){

        const header = document.querySelector('._1D7Lo');
        if(header){
            
            //clearInterval(getElement)
            const button = document.createElement("div")
            button.addEventListener("click", getContacts)
            button.innerHTML = `${btnDown}`;        
            header.appendChild(button)            
        
        } 
        //clica no botão para carregar todos os contatos
        const allButtons = document.querySelectorAll('.eJ0yJ._1Mq-e');
        const lastIndex = (allButtons.length - 1);
        if(allButtons[lastIndex]){            
            allButtons[lastIndex].click();    
        }
    }
    
    const div_3_cMa_3Whw5 = document.querySelector('._3-cMa._3Whw5');
    if( div_3_cMa_3Whw5 &&  !document.getElementById('btnCopy')){
        
        const text = div_3_cMa_3Whw5.innerHTML;
        if(text === 'online' || text === 'clique aqui para dados do contato')
            return;
        
        const container = document.querySelector('._3nq_A');
        if(container){
            
            //clearInterval(getElement)
            const div = container.firstChild;            
            const button = document.createElement("div")            
            button.addEventListener("click", getText )
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

function getContacts(){
    
    setHeight('9999999999px').then( () => {
        
        setTimeout( ()=>{
            //groupe name _2FVVk _230FM
            const div_2FVVk_230FM = document.querySelector('._2FVVk._230FM');
            const div_3FRCZ = div_2FVVk_230FM.lastChild;
            
            //sanitize
            let groupName = (div_3FRCZ && div_3FRCZ.innerHTML) ? div_3FRCZ.innerHTML : 'contatos';
            groupName = groupName.replace(/\<.*\>/gi,"");  
            
            const elements = document.querySelector('.-GlrD._2xoTX');
            const items = elements.childNodes;
            let text = 'Número;Administrador;Status;Nikname\n'                                 
            for (let item of items){
                
                const div_1 = item.childNodes;              
                const div_eJ0yJ_1Mq_e = div_1[0].childNodes;
                const [div_325lp, div_2kHpK] = div_eJ0yJ_1Mq_e[0].childNodes;
                const [div_3dtfX, div_1582E] = div_2kHpK.childNodes;
                const [div_3CneP, div_m60XR]= div_3dtfX.childNodes;
                
                const [div_357i8] = (div_3CneP && div_3CneP.childNodes) ? div_3CneP.childNodes : [];               
                const [div_3ko75_5h6Y__3Whw5] = ( div_357i8 && div_357i8.childNodes ) ? div_357i8.childNodes : [];
                const [div_LwCwJ] = (div_m60XR && div_m60XR.childNodes) ? div_m60XR.childNodes : [];
                
                const [ div_3tBW6, div_m61XR ] = (div_1582E && div_1582E.childNodes) ? div_1582E.childNodes : [];
                const [ div_3ko75_3Whw5 ] = (div_3tBW6 && div_3tBW6.childNodes) ? div_3tBW6.childNodes : [];
                const [ div_1_1Jb ] = (div_m61XR && div_m61XR.childNodes) ? div_m61XR.childNodes : [];
                const [ div_3Whw5 ] = (div_1_1Jb && div_1_1Jb.childNodes) ? div_1_1Jb.childNodes : [];
                
                
                let number = (div_3ko75_5h6Y__3Whw5 && div_3ko75_5h6Y__3Whw5.innerHTML) ? div_3ko75_5h6Y__3Whw5.innerHTML : '';
                number = number.replace(/\+55\s|\+|-/gi,"");     
                
                let admin = div_LwCwJ ? div_LwCwJ.innerHTML : '';
                admin = admin.replace(/\<.*\>/gi,"");  
                
                let status = div_3ko75_3Whw5 ? div_3ko75_3Whw5.innerHTML : '';     
                status = status.replace(/\<.*\>/g,"");     
                                
                let nikname = div_3Whw5 ? div_3Whw5.innerHTML : '';     
                nikname = nikname.replace(/\<.*\>/gi,"");     
                
                const sanitize = `${number};${admin};${status};${nikname}\n`;
                text += sanitize.replace(/\,|\'|\"|\“|\”/g,"");     
                
            }
            
            setHeight('100%');            
            saveToDataFile(text, groupName)
            
        }, 1500);        
    })
    
}

function setHeight(size){
    return new Promise( (resolve) => {

        const containerHack = document.querySelector('._2fpYo');
        //containerHack.setAttribute("style", "height: "+size+";");
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
            //console.log('Async: Copying to clipboard was successful!');
            alert(' Os participantes do grupo\n foram copiados para área de transferência com sucesso! :-)\n bento.dev.br')
        }, function(err) {
            alert('Não foi possível copiar os contatos para a área de transferência seu navegador não tem suporte a este recurso. :(')
            console.error('Async: Could not copy text: ', err);
        });
  
    
}