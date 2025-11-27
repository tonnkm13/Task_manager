import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        
    },
    completed: {
        type: Boolean,
        default: false,
     
    },  
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    

});
const Task = mongoose.model('Task', taskSchema);
export default Task;