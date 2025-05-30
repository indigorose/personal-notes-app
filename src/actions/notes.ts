"use server";

import { getUser } from "@/auth/server";
import { handleError } from "@/lib/utils";
import { prisma } from "@/db/prisma";


export const createNoteAction = async(noteId: string) => {
    try {
        const user = await getUser();
        if(!user) throw new Error("You must be logged in to create a note");
        await prisma.note.create({
            data: {
                id: noteId,
                authorId: user.id,
                text: "",
            },
        })
    return { errorMessage: null };
    } catch (error) {
    return handleError(error);
    }
};



export const updateNoteAction = async (noteId: string, text: string) => {
    try {
    const user = await getUser();

    if (!user) throw  new Error("You must be logged in to update a note");

    await prisma.note.update({
        where: { id: noteId, authorId: user.id },
        data: { text },
    });
    return { errorMessage: null };
    } catch (error) {
    return handleError(error);
    }
};