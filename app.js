 
 var data = {
    title:'Ekrem Erşahin'
 } 
 var Db = new movico.Observer(data); 
var main = new movico.Component('div');
main.element.innerHTML = `<div>
                            <h1>Ekrem Erşahin</h1>
                            <p>Hi everybody. <br/> I currently have't time and not working to my website development. I hope we'll see you soon.</p>
                        </div>` ;
main.renderTo(document.body);