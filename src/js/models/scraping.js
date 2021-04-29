import { setHeight } from './utils.js';

export function nameGroup() {
    // div > span com nome do grupo
    try {
        const span_name_group = document.querySelector('._2KQyF ._35k-1._1adfa._3-8er');
        const title = span_name_group.textContent;
    
        return title.replace(/\<.*\>/gi,"");         
    } catch (error) {
        return 'error-nome-grupo'
    }
 

}

export function dateCreatedGroup() {
    try {
        // span com a data de criação do grupo   
        const span_date_group = document.querySelector('._37Hn4._1AJnI._29Iga');
        return span_date_group.textContent;          
    } catch (error) {
        return 'error-data-grupo'
    }


}

export async function readGroup() {
   
    await setHeight('9999999999px');
    return new Promise( async ( resolve ) => {
    
        setTimeout( () => {
            // div que envolve o avatar e os dados dos participantes do grupo
            const elements = document.querySelectorAll('._2Z4DV._25uA8');
           
            let contacts = [];

            for (let item of elements){
                // wrappers: avatar e conteúdo
                const [div_wrapper_avatar, div_wrapper_content] = item.childNodes;
                
                // wrapper image < div_wrapper_avatar
                const [div_wrapper_rondend] = div_wrapper_avatar.childNodes; 
                const [, img] = div_wrapper_rondend.childNodes; 

                // wrappers das linhas < div_wrapper_content
                const [div_wrapper_title, div_wrapper_status] = div_wrapper_content.childNodes;

                // wrappers: nome administrador
                const [span_phone, span_status] = div_wrapper_title.childNodes;

                const [span_status_desc, span_status_name] = div_wrapper_status ? div_wrapper_status.childNodes : ['','']; 
                
                const admin = !!span_status;

                let status = span_status_desc.textContent || '';
                status = status.replace(/\<.*\>/g,""); 

                let name = span_status_name.textContent || '';
                name = name.replace(/\<.*\>/gi,"");   
                
                let src = '';
                try {
                    src = img.src.replace('t=s','t=l');      
                } catch (error) {
                  
                }
             
                
                let number = span_phone.textContent || '';
                number = (typeof number === 'string') ?  number.replace(/\+55\s|\+|-/g,"") : '';                     
                
                contacts.push({
                    number,
                    admin,
                    status,
                    name,
                    avatar: src
                }) 
        
            }
            
            resolve(contacts);
            setHeight('100%');           

        }, 1500);        
                
    });
 
}
  
export function readListParticipants(){
    // div com a lista de números/nomes dos participantes do grupo
    try {
        const classContainerParticipantes = document.querySelector('.YmixP.fKfSX');
        let title = classContainerParticipantes.textContent.replace(/,\s/gi,"\n");    
        title = title.replace(/\+55\s|\+|-/gi,"");
        return title;        
    } catch (error) {
        return 'erro-participantes'
    }

}


  