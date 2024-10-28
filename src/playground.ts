import { db } from "./server/db";


await db.user.create({
    data: {
        firstName: 'Alice',
        lastName:'owen',
        emailAdress:"test@gmail.com"
    },
})
console.log('done');
