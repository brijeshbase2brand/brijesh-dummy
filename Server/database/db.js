// import mongoose from 'mongoose';

// const Connection = async () => {
//   const UserName = 'b2b campus';
//   const UserPassword = 'b2bcampus123';
//   const DataName = 'b2b campus';

//   const URL = `mongodb+srv://${UserName}:${UserPassword}@cluster0.mdjlkpn.mongodb.net/${DataName}?retryWrites=true&w=majority`;

//   try {
//     await mongoose.connect(URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database Connected Successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// };

// export default Connection;

import mongoose from "mongoose";

export const Connection = async(USERNAME, PASSWORD)=>{
      const UserName = 'b2b campus';
      const UserPassword = 'b2bcampus123';
      const DataName = 'b2b campus';
    const URL=`mongodb+srv://${UserName}:${UserPassword}@cluster0.mdjlkpn.mongodb.net/${DataName}?retryWrites=true&w=majority`;
    
    try{
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Seccessfuly');
    }catch(error){
        console.log('Error while connecting with the database ', error.message);

    }


};

export default Connection;
