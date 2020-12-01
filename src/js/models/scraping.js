import { setHeight } from './utils.js';

export function nameGroup() {

    const yEe1t = document.querySelector('.YEe1t');
    const title = yEe1t.textContent;

    return title.replace(/\<.*\>/gi,"");  

}

export function dateCreatedGroup() {

    const _13BQq = document.querySelector('._13BQq');
    return _13BQq.textContent;  

}

export async function readGroup() {
    await setHeight('9999999999px');
    return new Promise( async ( resolve ) => {
    
        setTimeout( () => {

            // const elements = document.querySelector('.-GlrD._2xoTX');
            const elements = document.querySelectorAll('._3Pwfx._2XSjg');
            
            //const items = elements.childNodes;        
            
            let contacts = [];

            for (let item of elements){
                
                const [_22mTQ, _1C6Zl] = item.childNodes;
                //imagem < _22mTQ
                const [_1l12d] = _22mTQ.childNodes; 
                const [img] = _1l12d.childNodes;

                //textos < _1C6Zl
                const [_1c_mC, _7W_3c] = _1C6Zl.childNodes;
                const [_3Tw1q, _2gsiG] = _1c_mC.childNodes;

                const [fqPQb, _2gsiG_] = _7W_3c ? _7W_3c.childNodes : ['','']; 
                
                const admin = !!_2gsiG;

                let status = fqPQb.textContent || '';
                status = status.replace(/\<.*\>/g,""); 

                let name = _2gsiG_.textContent || '';
                name = name.replace(/\<.*\>/gi,"");   

                let src = img.src || '';
                src = src.replace('t=s','t=l');
                
                let number = _3Tw1q.textContent || '';
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
  
export function readTitle(){
    const _2Gdma_2amHe = document.querySelector('._2Gdma._2amHe');
     let title = _2Gdma_2amHe.textContent.replace(/,\s/gi,"\n");    
    title = title.replace(/\+55\s|\+|-/gi,"");
    return title;
}


  