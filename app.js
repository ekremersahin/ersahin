 
 var data = {
    title:'Ekrem Erşahin'
 } 
 var Db = new movico.Observer(data); 
var main = new movico.Component('div');
main.element.innerHTML = `<div>
                            <h1>Ekrem Erşahin</h1>
                            <p>Hi everybody. <br/> I currently don't have any time for my website development. I hope we'll see you soon.</p>
                            <p>e-mail: ekrem@ersahin.net</p>
                            <p>whatsapp: +90(530) 963 49 26</p>
                        </div>` ;
main.renderTo(document.body);