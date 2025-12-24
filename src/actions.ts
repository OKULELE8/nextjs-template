"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addEvent(formData: FormData) {
  // Získání dat z formuláře podle "name" atributů
  const time = formData.get("time") as string;
  const type = formData.get("type") as string;
  const location = formData.get("location") as string; // venku / uvnitr
  const place = formData.get("place") as string;
  const note = formData.get("note") as string;
  
  // Dnešní datum pro jednoduchost (později můžeme brát z kalendáře)
  const date = new Date().toLocaleDateString("cs-CZ");

  // Uložení do databáze
  await db.event.create({
    data: {
      date,
      time,
      type,
      location,
      place: place || "", // Pokud není vyplněno, uloží se prázdný řetězec
      note: note || "",
    },
  });

  // Obnovení stránky, aby se nová událost hned ukázala
  revalidatePath("/");
}