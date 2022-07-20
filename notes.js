const fs=require('fs')

const chalk=require('chalk')



const addnotes=(title,body)=>
{
    // var notes=[]
    const notes=loadnotes()
    try{
        
        // const databuffer=fs.readFileSync('notes.json')
        // const datastr=databuffer.toString()
        // notes= JSON.parse(datastr)
        
        const duplicates=notes.filter(function(note)
        {
            return note.title===title
        })
        if (duplicates.length===0)
        {
            notes.push({
                title:title,
                body:body
            })
            console.log(notes)
            save(notes)
            console.log(chalk.green.inverse('new notes added!'))
        }
        else
        {
            console.log(chalk.red.inverse('notes already taken!'))
        }

    }catch(e)
    {
        notes= []
    }

    
}

const save=(notes)=>
{
    const jsstr=JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsstr)

}
const loadnotes=()=>
{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const datastr=databuffer.toString()
        return JSON.parse(datastr)

    }catch(e)
    {
        return []
    }
}
const removenotes=(title)=>
{
    try{
        const data=loadnotes()
        const notestokeep=data.filter(function(keep)
        {
            return keep.title!==title
        })
        
        if (notestokeep.length!=data.length)
        {
           
            save(notestokeep)
            console.log(chalk.green.inverse('notes removed!'))
        }
        else{
            console.log(chalk.red.inverse('no notes found!'))
        }

       
    }
    catch(e)
    {
        console.log('notes is empty!')
    }
}
const getnotes=()=>
{
    return "My notes....."
}

module.exports=
{
    addnotes:addnotes,
    getnotes:getnotes,
    removenotes:removenotes
}