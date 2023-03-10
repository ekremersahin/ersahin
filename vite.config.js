import { defineConfig,loadEnv } from 'vite';   
 
//import  Compiler from 'movijsx/compiler';
//import  moviCompiler   from "E:\\2022\\movijsx\\packages\\plugin-jsx";
import movi from "movijsx"
//import moviCompiler from "E:\\2022\\movi\\packages\\compiler";
//import Compiler from "movijsx/dist/compiler";
 
//import { vitePlugin } from "movijsx";

//var moviCompiler = require('E:\\2022\\movijsx\\packages\\plugin-jsx\\dist\\index.js')
const comp = () => { 
    return { 
    name: 'ivirzivir',
        transform(src, id) {
            // var e = new DocumentFragment();
            // e.innerHTML = src;
             console.error(id);
            return src;
     }
}
        
}
export default defineConfig({
    plugins: [    
      movi.vitePlugin()
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx'],
    },
    optimizeDeps: {
        esbuildOptions: { 
            plugins: [],
        },
    }
})

// export default {

   
//     plugins: [moviJSX({})], 
   
// } 