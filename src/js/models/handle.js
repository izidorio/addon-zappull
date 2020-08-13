import { readGroup, nameGroup, readTitle } from './scraping.js';
import { saveToDataFile, copyToClipboard } from './utils.js';
import { style, card, container } from './template.js';

export async function saveCsv(){

    const nameFile = nameGroup();
    
    readGroup().then( ( contacts ) => {
        
        contacts.sort( (a, b) => {
            return b.admin - a.admin;
        })

        let csv = 'Número;Administrador;Status;Nome\n';
        csv += contacts.map( contact => {           
            const admin = contact.admin ? 'Administrador do grupo' : '';
            const sanitize = `${contact.number};${admin};${contact.status};${contact.name}\n`;
            return sanitize.replace(/\,|\'|\"|\“|\”/g,"");            
        }).join('');

        saveToDataFile(csv, nameFile);
    });
    
}

export async function preview(){
    
    const name = nameGroup();
    
    readGroup().then( ( contacts ) => {
        
        contacts.sort( (a, b) => {
            return b.admin - a.admin;
        })

        let html = `${style}<h2>${name} (${contacts.length} participantes)</h2>`; 
        
        let cards = '';
        let i = 1;
        for( let contact of contacts){
            cards += card(contact)
            if( i % 14 == 0 ){                
                html += container(cards);
                cards = '';
                i=0;
            }
            i++;
        }
        
        const previewPage = window.open('about:blank');
        previewPage.document.write(html);
        
    });
}

export function contactsToClipboard(){
    const contacts = readTitle();
    copyToClipboard(contacts);

}