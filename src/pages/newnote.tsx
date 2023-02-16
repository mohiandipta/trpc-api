import Link from "next/link";
import React, { useState } from "react";
import { FormData } from "../types/types";
import { api } from "../utils/api";

const newnote = ({ title, description }: FormData) => {
  const [data, setData] = useState({ title: title, description: description });
  const addNewNote = api.mynotes.newNote.useMutation({
    onMutate: () => {
      
    }
  })
  console.log(addNewNote)

  return (
    <div className="mx-20">
      <main className="mx-auto flex min-h-screen flex-col justify-center py-10 md:container">
        <Link
          className="indigo-700 inline-block w-20 rounded-md py-1 text-center text-base font-semibold leading-7 text-green-700 hover:bg-green-100"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-6 text-left text-3xl font-bold tracking-tight text-gray-900">
          Add new notes
        </h1>
        <form onSubmit={(e) => addNewNote.mutate({
          title: data.title,
          description: data.description
        })}>
          <input
            type="text"
            required
            value={data.title}
            placeholder="Your title"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <textarea
            required
            value={data.description}
            placeholder="Your description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
          >
            Add a note
          </button>
        </form>
      </main>
    </div>
  );
};

export default newnote;
