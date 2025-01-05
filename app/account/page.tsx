
import { prisma } from '@/lib'
import CreateAccount from './AccountComponents/account'

const page = async () => {
    const getAllUsers = await prisma.user.findMany();
    console.log(getAllUsers)

    
  return (
    <> 
    <div className=''>
        <CreateAccount/> 
    </div>
       
    </>
  )
}

export default page