import fs from "fs";
import { NavigationMetaData, WalkingTheTree } from "./mdx-utils";

function createNavigationMetaDataJSONFile(){
    const path="./library-database/navigationMetaData.json"
    const data=JSON.stringify(NavigationMetaData("library-database",["navigationMetaData.json","slugMetaData.json"]))
  
    fs.writeFile(path,data,(err)=>{
        console.log({err})
    })
}

function createSlugMetaDataJSONFile(){
    const path="./library-database/slugMetaData.json"
    const data=JSON.stringify(WalkingTheTree(process.cwd(),"/library-database",["navigationMetaData.json","slugMetaData.json"]))

    fs.writeFile(path,data,(err)=>{
        console.log({err})
    })
}
  

createNavigationMetaDataJSONFile();
createSlugMetaDataJSONFile();