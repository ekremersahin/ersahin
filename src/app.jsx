 import { CreateMoviApp  } from "movijs";
 
import router from "./config/router";
 
var nfp = <div>NOT FOUND</div>;
var apps = new CreateMoviApp({
    Configuration(options) { 
        var k = null;
        this.context.NotFoundPage = nfp;
        options.Route.router.mode = "history";
        options.Route.router.gate = (next, e) => {  
            next(); 
        }

        router.map((r) => {
            options.Route.add(r);
        })
        
    },
    ServiceConfiguration: (services) => {},
    online(sender, e) {},
    offline(sender, e) {}
});
 
apps.run(document.getElementById('app'))




