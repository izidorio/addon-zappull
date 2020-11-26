export function setHeight(size){
    
    return new Promise( (resolve) => {

        // const containerHack = document.querySelector('._2fpYo');        
        const containerHack = document.querySelector('.i5ly3._299go');        
        
        if(containerHack) {

            containerHack.style.height = size;    
            const check = setInterval( () => {
                          
                if(containerHack.style.height !== size){                
                    clearInterval(check);
                    resolve('ok');
                }
                
            }, 500);
        }
        
    });
}

export function copyToClipboard(text) {

    navigator.clipboard.writeText(text)
        .then(function() {            
            alert(' Os participantes do grupo\n foram copiados para área de transferência com sucesso!\n :-) izidorio@bento.dev.br')
        }, function(err) {
            alert('Não foi possível copiar os contatos para a área de transferência seu navegador não tem suporte a este recurso. :(')
            console.error('Async: Could not copy text: ', err);
        });    
}

export function saveToDataFile(text, fileName){
    
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