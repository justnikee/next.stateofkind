
import { prisma } from '@/lib'
import CreateAccount from './AccountComponents/createAccount'

const page = async () => {
    const getAllUsers = await prisma.user.findMany();
    console.log(getAllUsers)
  return (
    <> 
    <div className='max-w-sm m-auto bg-slate-100 rounded-sm p-4'>
        <CreateAccount/> 
    </div>
       
    </>
  )
}

export default page