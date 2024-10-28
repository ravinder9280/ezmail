import { db } from "@/server/db";



export const POST=async (req:Request)=>{
    try {
        
        const {data}=await req.json();
        console.log('webhook recieved');
        await db.user.create({
            data: {
                firstName: data.first_name,
                lastName:data.last_name,
                emailAdress:data.email_addresses[0].email_address,
                imageUrl:data.image_url
            },
        })
        return new Response("webhook received",{status:200})
    } catch (error:any) {
        console.log(error.message);
        return new Response(error.message,{status:501})

        
        
    }

    
}