const btnCopy = `<img id="btnCopy" title="Copia os participantes do grupo para a área de transferência" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABPlBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogllokllognl4cllogklogllokml4clloghm4UllYkkkoYklocllIgllogllYgjl4sllogllocllogmmYYllogkmIYllogllogolIYllogrlY4llogklYclmIkllocllYgmlokllocklokmlYcklIgmlogmlYgmlocllogllognk4kAgIAllockl4gui4sllogllogmlogll4oml4gllogllogAAAAZSkVZAAAAaHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnPZh/kKlXJlR8hd7FeA++XQs+tHUKLQ588cmyiT8k0Wx17d1xIArejxmWvQaArNpC6z7ckyw3kT/zKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AgNARUt8LOwfgAAAO1JREFUKM9jYGBkyoACZhYGZMCaAZdgY0eW4EBIcHJxY5Xg4c3g48cmISAoJCwiikUiQ0xcQkISmwQISFEmIS0DArKYEnLyIKCQkaGopIzNchVVNXUNTS1tHbiErh4I6BsYQhQYGaPoMDE1g+s1h0oIgaywsEQ4zcoaImEDcpQtJ1TUzt4hwxHJKCfnDBdhIO3qBowIdyQJPWAoenhmeHn7ADk+QAl5qISvX0aGf0AgexCIEwyUCIFKyIQCibBwLjAnAuSsyCgw8IgGOxosHhOLHMdx8XDnJqCkCobEJIhwcgoDOkhNk3JIt3ADMQHjyH6B24+svQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0xM1QwMToyMTo0NSswMDowMBcZLuEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMTNUMDE6MjE6NDUrMDA6MDBmRJZdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;
const btnDown = `<img id="btnDown" title="Baixa os participantes do grupo em .csv" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogllokllognl4cllogllogllogklogllokml4cmlYclloghm4UllYkkkoYllogllYgjl4sllogllogllokmlokllogrlY4llogklYcll4gllogklogmlokllocklokllogmlooll4gllYcllogmlokmlYgmlockmIYllogllogA//8llognk4kAgIAllocllogllogkl4gui4sllogmlogll4oml4gllogmmYYllogAAADCz5b+AAAAbHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnPZh/kKl/KxcmVE18hd7Fb90LPq0l4jKJPlGkEuNt3XE9T2JYHx5PGY5Wu0B9BoCs+b9aQv7ckyw3ijXHdg6AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QIDQEPL66QK4kAAAD3SURBVCjPY2BgZMqBAmYWBmTAmgOXYGNHluBASHBycWOV4OHN4ePHJiEgKCQsIopFIkdMXEJCEpsECEhRJiEtAwKymBJy8iCgkJOjqKSMzXIVVTV1DU0tbR24hK4eCOgbGEIUGBmj6DAxNQOS5hYgtiVUQghkhZU12DgbEGlrB5GwBznKwREhkeOEZJSzC5KEK5KEXk6OphtIwsg9J8cDKCEPlfA0z/Hy9lGxcfH1y8nxB0oEQCVkAnNygoJDGEPDgJxwkLMiIsEgKhooECMZywOk4uKR4zghESiUpJ0MJFNQUgVDqgXE0LR0BnSQkSnllWWVDWICAI0UgJVgUvU0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA4LTEzVDAxOjE1OjQ3KzAwOjAwEI/5swAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOC0xM1QwMToxNTo0NyswMDowMGHSQQ8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC">`;
const btnPrt = `<img id="btnPrt" title="Preview para impressão" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABblBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogmmYYmlYcllogllokllognl4cllogklYkkl4gllogml4cllogklogllokmlokmlocllogllogllYcmmYwllYkkkoYmlokjm4wimoYllYgjl4sllogllogmlYgmlogllogllogjl4UmlYcmlocklooklYkllogllogrlY4llogkl4sllocmlogllogmlokllocklokomo0llogll4cmlogmlYgkmIYllogllogok4gmlognk4kAgIAllocll4gkl4gui4sklokll4oml4gllogllogAAACb4XD3AAAAeHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnOoogPZh/kKlY5r4UbJcmVBE2ouRFHsVqjMmdCz6+WXFtNgsV2Y/VPvKJPxAwnKSt3XEJs5Tejw5WvQtSRoCs59pC3BMsN49qpmoAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QIDQEQG0J+0aIAAAEOSURBVCjPY2BgZKqAAmYWBmTAWgGXYGNHluBASHBycWOV4OGt4OPHJiEgKCQsIopFokJMXEJCEpsECEhRJiEtAwKymBJy8iCgUFGhqKSMzXIVVTV1DU0tbR24hK4eCOgbGFYYyRibVJiaoegwt7CsqLCytrG1q6iwh0oIgaxwcATKOjlXuLhWVCi4QSTcQY7y4ARKeHopeWsCaR8ko3z9gIS/ekAgiBOEJKEHxMEhoWHhEZEVFVFACXmoRHRMRUVsHJARn1BRkQiUSIJKyCRX+KWAGKlpFRXpIGdlhIFBZlZFdg5Igim3IjsPOY7zC7K5WYGgMLeiCCVVMBR7loD1GsYzoIPSMin/cgdjEBMAbpqJtZrTgGcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMTNUMDE6MTY6MjcrMDA6MDA910s3AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTEzVDAxOjE2OjI3KzAwOjAwTIrziwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=">`;


import { saveCsv, preview, contactsToClipboard } from './handle.js';


const setButtons = setInterval( () => {
    
    if(!document.getElementById('btnDown')){
        const btnMais = document.querySelectorAll('._2nY6U._3A-iD');
        const content =  btnMais.length > 0 ? btnMais[btnMais.length - 1] : null;
        
        if(content){
            const [, containerBtn] = content.childNodes;
            const [containerMais] = containerBtn.childNodes;
            const [txtMais] = containerMais.childNodes;
            const text = String(txtMais.textContent || '');
            
                       
            if(text.match(/mais/g)){
                containerBtn.click();

                let i = 0;
                let scrollDow = setInterval(()=>{
                    // classe do container dos contatos para rolar 
                    let box = document.querySelector('.KPJpj');
                    
                    i++;
                    const height = i * 7500
                    if( box && box.scrollTo ) box.scrollTo({top: height, behavior: 'smooth'});
                
                        if (!box || i === 3){

                           // containerDadosGrupo.appendChild(divBtnPrint)     
                            clearInterval(scrollDow);
                        } 
                
                }, 1500);
            }
        }
      
        // classe do container Dados do grupo
        const containerDadosGrupo = document.querySelector('._1FrBz');
       
        if(containerDadosGrupo){   
            
            if( containerDadosGrupo.innerHTML && containerDadosGrupo.innerHTML === 'Dados do contato') return;
            

            const container = document.querySelector("._1FrBz")
            container.setAttribute("style", "display: flex; gap: 8px;");

            //clearInterval(getElement)
            const btnCSV = document.createElement("div")            
            btnCSV.addEventListener("click", saveCsv );
            btnCSV.innerHTML = `${btnDown}`;        
            containerDadosGrupo.appendChild(btnCSV)     

            const divBtnPrint = document.createElement("div")            
            divBtnPrint.addEventListener("click", preview);
            divBtnPrint.innerHTML = `${btnPrt}`;
            
            let i = 0;
            let scrollDow = setInterval(()=>{
                i++;
                let box = document.querySelector('.KPJpj');
                const height = i * 7500
                if( box && box.scrollTo ) box.scrollTo({top: height, behavior: 'smooth'});
               
                if (!box || i === 3){

                    containerDadosGrupo.appendChild(divBtnPrint)     
                    clearInterval(scrollDow);
                } 
               
            }, 1500);

        } 
    }
    
    // classe do container que guarda os nome do grupo e os participantes
    const wrapper_participantes = document.querySelector('._3e6xi');
    

    console.log();
    if( wrapper_participantes &&  !document.getElementById('btnCopy')){
  
        const text = wrapper_participantes.innerHTML;
        if(text === 'online' || text === 'clique aqui para dados do contato')
            return;
    
        if(wrapper_participantes){
            // clearInterval(getElement)
            const button = document.createElement("div")            
            button.addEventListener("click",  contactsToClipboard )
            button.innerHTML = `${btnCopy}`;        
            wrapper_participantes.appendChild(button);       

            // const div = wrapper_participantes.firstChild;            
            // div.appendChild(button);           
        
        }         
    }
    
}, 2000);

export default setButtons;

