import queue from 'bee-queue'

const Queue = new queue('my-bee-queue')

Queue.process((job,done)=>{
    console.log("called twitter api");
    if(abc === "abc")
    {
        return done(Error(`random error`))
    }
    return done()
})

export default Queue