import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

async function main(){
    await prisma.post.create({
        data:{
            title:"sunset",
            content:"assas",
            author:{
                connect:{
                    id:1
                }
            }
        }

    })
}
main()
