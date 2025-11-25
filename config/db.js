import mongoose from 'mongoose';

const URI = 'mongodb+srv://tonnkm_db_user:<db_password>@cluster0.2l3xzkn.mongodb.net/?appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
 
    .catch((e) => {
        console.error(e)
    });