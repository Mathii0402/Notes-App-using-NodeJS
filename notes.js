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
        
        const duplicates=notes.filter((note)=>note.title===title)//this will check the whole code until the last line
        const duplicate=notes.find((note)=>note.title===title)//this will check once whether other match is found or not
        // if (duplicates.length===0)
        // {
        //     notes.push({
        //         title:title,
        //         body:body
        //     })
        //     console.log(notes)
        //     save(notes)
        //     console.log(chalk.green.inverse('new notes added!'))
        // }
        // else
        // {
        //     console.log(chalk.red.inverse('notes already taken!'))
        // }
        if (!duplicate)
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
    
    const data=loadnotes()
        const notestokeep=data.filter((keep)=>keep.title!==title)
       
        
        if (notestokeep.length!=data.length)
        {
           
            save(notestokeep)
            console.log(chalk.green.inverse('notes removed!'))
        }
        else if(notestokeep==0)
        {
            console.log(chalk.red.inverse('notes is empty!'))
        }
        else{
            console.log(chalk.yellowBright.inverse('no notes found!'))
        }
   
}



module.exports=
{
    addnotes:addnotes,
    removenotes:removenotes
}
