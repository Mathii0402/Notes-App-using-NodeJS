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
    handler:function(argv)
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
    handler:function(argv)
    {
        return notes.removenotes(argv.title)
    }
}
)
yargs.parse()