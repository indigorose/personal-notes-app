// "use client"

// import { Loader2 } from 'lucide-react'
// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// // import { resolve } from 'path'
// import { Toaster } from 'sonner'

// const LogOutButton = () => {
//     // const{toast} = useToast()
//     const [loading, setLoading] = useState(false)
//     const handleLogOut = async() => {
//         setLoading(true)
//         await new Promise( (resolve) => setTimeout(resolve, 2000));
//         const errorMessage = null;
//         if(!errorMessage){
//             toast ({title:"Logged Out", description:"You have been logged out successfully", status: "success"})
//         }
//         setLoading(false)
//         console.log("Logging out...")
//         // setLoading(true)
//         // setTimeout(() => {
//         //     setLoading(false)
//         // }, 2000)
//     }
//   return (
//    <Button className='w-24'
//    variant="outline"
//    onClick={handleLogOut}
//    >
//     {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
//    </Button> 
//   )
// }

// export default LogOutButton