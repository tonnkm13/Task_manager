import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const userID = req.user._id;

    const taskObj = {
      description,
      createdBy: userID,
    };

    const task = await Task.create(taskObj);
    return res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create the task' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const userID = req.user._id;

    const task = await Task.findOneAndUpdate(
      { _id: taskID, createdBy: userID },
      req.body,
      { new: true, runValidators: true },
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update the task' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const userID = req.user._id;

    const task = await Task.findByIdAndDelete({
      _id: taskID,
      createdBy: userID,
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete the task' });
  }
};

export const getTasksByUserId = async (req, res) => {
  try {
    const userID = req.user._id;

    const tasks = await Task.find({ createdBy: userID });

    return res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete the task' });
  }
};

export const getTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const userID = req.user._id;

    const task = await Task.findOne({ _id: taskID, createdBy: userID });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete the task' });
  }
};
