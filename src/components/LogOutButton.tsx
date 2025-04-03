"use client"

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
// import { resolve } from 'path'
import { toast } from 'sonner'
import Router from 'next/router'

const LogOutButton = () => {
    // const{toast} = useToast()
    const [loading, setLoading] = useState(false)
    const handleLogOut = async() => {
        setLoading(true)
        await new Promise( (resolve) => setTimeout(resolve, 2000));
        const errorMessage = "Error Logging Out";
        if(!errorMessage){
            toast.success("Logged Out", {
        description: "You have been logged out successfully",
        })
        Router.push("/")
        } else{
            toast.error("Error Logging Out", {
                description: errorMessage,
            })
        }
        setLoading(false)
    }
    return (
    <Button className='w-24'
    variant="outline"
    onClick={handleLogOut}
    >
    {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button> 
    )
}

export default LogOutButton