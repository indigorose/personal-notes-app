'use client';

import { User } from "@supabase/supabase-js"

type Props = {
    user: User;
}

function AskAIButton({ user }: Props) {
    console.log(user.email)
    return (
<div className="">AskAIButton</div>
    )
}

export default AskAIButton;