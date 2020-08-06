const icon = `<img  class="content" id="zappull" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABHpJREFUSImdlG1M1XUUxz/nf/88yeVy4V5AWIoGKDiU8gkXFtS0F2nWLNN0PbCItvJdPjRdWatcW2qvnLWpORcrXzinbuJymjrUMgUFacvxEKIIci8XuddA4P5PL6A7rvdiD+fVOed/zvf7+/7+5/yEh5jP58sOim2lomWiOgtIBVGgA2gVqB4WPZzhdLaMhyHRkl6v9xE1zK3AasA29puiSHibBXwfFN2S4XQ2/yOBt7f3JVXZDTiDGuRydy2XPBdp6WvBM+ABICkmieykbB5zPU7JxBISbAmgDCC8405J3j8uQXdvb6Wo7AKMK946qpqq6O7vHk89AIlmIisefYXSrFJkRNvHrpTkTyIIunvuLhHhsKK2A80HON5e/VDgB60kYyHl08sxDROQcneKY1+IoK+vzz0Y1EYg/YfmAxxvP/afwMeSVBRUINAfFAoznM4WA2AwqB8C6Ve9V/4XuGmYTEzM5FxXDWc7zgKSYFP5CkB6e3tThi3psLDiP7i4kTv9d6KCFLoKccW5OdNxGoAYI5bK/LfJS85jwLrPrsadtAVuYI9JZNuCHcTb4i3LIN8IYixHiL/maxgXfF5aMetmrqN8WjnLp74MwJA1SFZiFs44J4daDtEWuAFAYOgeF7ouABg2i1cNVS0DqPfWRwWf457LezPe5e95WJa9lFhbLJX5lShwpO0Ijb5rYT1XvHUAKFJmChQq0BZoiwCfnlzA2sK1YbmjbUexVNnz+x6CGox6qDb/jVHPmmYo4h6RFogoXF/0ftjWnrj5IwdbD7Is+wW+fvIblmY/H5UgMOwfcVRcBowcwyZhLwK5SdMwjZhQ/NOt01Q1VbEmbw2Lsp5hwy/rWTLpOcoySyMITDFHHOG+AdwBSI1LCSuamjw5LP6uaT8V+RUsylrMxl83YDft2Awb3oGeCIK0+LRRBXSail4VZF6OI4/6noZQ0WVPLWtyXwvFu0v3hi5rW/F2RGx8e30vDb4GHrSc5NwRAQZ1hqDVAPPT54fdd89AD10DXaF47KMVa8Sx7/o+LnSejwAHKE4rHhGgHDP6A85qoDtzQiaz3XPCCjdf3ERXf1dYLqhBttd/yfnOmqjgOY4cClIKAPyGBo8IgKendxMinzf1NfFZ7acRTXbTzpy0ubQH2mjxt0YFBjANGx/N3sJkezaIbHU7HZtNABGxKXArcCtqY2A4wJnbp8cFBhCE1/PeYLI9G4VWhu5/ATA6TywGuBblh/0bM40Yyqe/SUnGQkD7DUtWu9LS/ACm1+t1KCyw1KK5r5kiVxEFzhlMdUzhXOd5znXWjLuxgjAzdRarcleRNSEL0H5VWeF2Jf8cqvH4+l4EPWSphaIRC+cf9FPnraU90I5nwEtQh0mKcTAlaQpFriLSE9JHyWixRFemOZ2XwtQh+iwKhhgACtoIclJFbgr6VlJsUv5TUbZ1jN1Gdeef95J3TJok/REqPb67JxT9A5VTVqztVIbdHppLVRWfz/+EJfo0kA+SJaipqAeR3yRITWqq46SIDI3H/hfsU7WM0gnUTgAAAABJRU5ErkJggg==">`;

const getElement = setInterval(()=>{
    
    if(!document.getElementById('zappull')){

        const body = document.querySelector('._2ruUq._3xjAz')
        if(body){
            
            //clearInterval(getElement)
            const button = document.createElement("div")
            button.addEventListener("click", getContacts)
            button.innerHTML = `${icon}`;        
            body.prepend(button)            
        
        } 
    }

}, 2000)

function getContacts(evt){

    evt.preventDefault();    
    const html = document.querySelector('._3xjAz span')

    if(html){
        
        const inner = html.innerHTML;        
        let text = inner.replace(/,\s/gi,"\n");        
        text = text.replace(/\+55\s|\+|-/gi,"");        
        copyToClipboard(text);        
     
    }
    
}

function copyToClipboard(text) {

    navigator.clipboard.writeText(text)
        .then(function() {
            //console.log('Async: Copying to clipboard was successful!');
            alert(' Os participantes do grupo\n foram copiados para área de transferência com sucesso! :-)\n bento.dev.br')
        }, function(err) {
            alert('Não foi possível copiar os contatos para a área de tranferência seu navegador não tem suporte a este recurso. :(')
            console.error('Async: Could not copy text: ', err);
        });
  
    
}