import { setHeight } from './utils.js';

export function nameGroup() {

    const div_2FVVk_230FM = document.querySelector('._2FVVk._230FM');
    const div_3FRCZ = div_2FVVk_230FM.lastChild;
    
    let groupName = (div_3FRCZ && div_3FRCZ.innerHTML) ? div_3FRCZ.innerHTML : 'contatos';
    return groupName.replace(/\<.*\>/gi,"");  

}

export function dateCreatedGroup() {

    const div_2_1_O = document.querySelector('._2-1_O');
    
    
    const groupDateCreated =  div_2_1_O.innerHTML;
    return groupDateCreated;  

}

export async function readGroup() {
    
    await setHeight('9999999999px');
    
    return new Promise( async ( resolve ) => {
    
        setTimeout( () => {

            const elements = document.querySelector('.-GlrD._2xoTX');
            const items = elements.childNodes;        
            
            let contacts = [];

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
                
                const admin = (div_LwCwJ && div_LwCwJ.innerHTML) ? true : false;
                
                let status = div_3ko75_3Whw5 ? div_3ko75_3Whw5.innerHTML : '';     
                status = status.replace(/\<.*\>/g,"");     
                                
                let name = div_3Whw5 ? div_3Whw5.innerHTML : '';     
                name = name.replace(/\<.*\>/gi,"");     
                
                let src = div_2goTk.src || '';
                src = src.replace('t=s','t=l');
                
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
    const div_3_cMa_3Whw5 = document.querySelector('._3-cMa._3Whw5');
    let title = div_3_cMa_3Whw5.innerHTML.replace(/,\s/gi,"\n");    
    title = title.replace(/\+55\s|\+|-/gi,"");
    return title;
}


  