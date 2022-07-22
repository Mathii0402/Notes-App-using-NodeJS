const yargs = require("yargs")
const notes=require("./notes")

yargs.command(
    {
        command:"add",
        describe:"add notes",
        builder:{
        title:
        {
            describe:"title",
            demandOption:true,
            type:"string"
        },
        body:
        {
                describe:"body",
                demandOption:true, 
                type:"string"
        }
    },
    handler(argv)
    {
        return notes.addnotes(argv.title,argv.body)
    }
    })


yargs.command(
{
    command:"remove",
    describe:'title to remove',
    builder:{
    title:
    {
        describe:"title",
        demandOption:true,
        type:'string'
    }},
    handler(argv)
    {
        return notes.removenotes(argv.title)
    }
}
)

yargs.command(
{
    command:"list",
    describe:"to list all notes",
    handler()
    {
        return notes.listnotes()
    }

})

yargs.command
({
    command:"read",
    describe:"to read all the contents of the note",
    builder:
    {
        title:
        {
            describe:"title of the note",
            demandOption:true,
            type:'string'
        }},
        handler(argv)
        {
            return notes.readnotes(argv.title)
        }
    
})

yargs.command
({
    command:"edit",
    describe:"enter the title to edit",
    builder:
    {
        title:
        {
            describe:"title",
            demandOption:true,
            type:"string"
        },
        body:
        {
                describe:"body",
                demandOption:true, 
                type:"string"
        }
   
    },
    handler(argv)
    {
        return notes.editnotes(argv.title,argv.body)
    }

})

yargs.parse()