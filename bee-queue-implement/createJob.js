import queue from './queue.js'

const enQueue = async (data) => {
    const job = await queue.createJob(data).save();

    console.log("Error in creating Job with data: ",data);
    job.on('succeeded',(job,result) => {
        console.log("done");
    })
    job.on('failed',(job,err)=>{
        console.log('error');
    })
    return job;
}

export default enQueue


