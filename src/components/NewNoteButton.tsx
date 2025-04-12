'use client'

import { useState } from "react";
import { toast } from "sonner";
// import Router from "next/router";
import { useRouter } from "next/navigation";
import { debounceTimeout } from "@/lib/constants";
import { createNoteAction } from "@/actions/notes";


type Props = {
    user: User | null;
};

const NewNoteButton = ({user}: Props) => {
  const router = useRouter();
//   const  {toast } = useToast();
  const [loading, setLoading] = useState(false);
  const handleClickNewNoteButton = async () => {
if(!user) {
    router.push("/login");
} else {
    setLoading(true);
    const savingToast = toast.loading("Saving Current Note", {description:"Saving your current note before creating a new one"});


    await new Promise((resolve) => setTimeout(resolve, debounceTimeout + 500));

    const uuid = uuidv4();
    await createNoteAction(uuid);
    router.push(`/?noteId=${uuid}`);
    // savingToast.dismiss()
    toast.success("Note Created", {
        description: "Your note has been created successfully"})
    
    setLoading(false);
    }
}

  }


export default NewNoteButton