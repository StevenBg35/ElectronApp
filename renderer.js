var app = require('electron').remote
var dialog = app.dialog
var fs =require('fs')

document.getElementById('btn').addEventListener('click', saveFile) 

function savefile(){
    dialog.showSaveDialog((fileName)=>{
        if(fileName === undefined) {
            alert("No file name was entered!")
            return;
        }
        var content = document.getElementsByTagName('li').value

        fs.writeFile(fileName, content, (err)=>{
            if(err) console.log(err)
            alert("The file has benn saved successfully")
        })
    })
}