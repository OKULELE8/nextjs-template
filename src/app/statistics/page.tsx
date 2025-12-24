import Link from "next/link";
import { addEvent } from "@/actions"; // Importujeme naši novou funkci

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      {/* HEADER */}
      <header className="bg-surface sticky top-0 z-50 border-b border-gray-100 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-100 shadow-sm relative bg-gray-200">
              <img
                alt="Golden Retriever"
                className="w-full h-full object-cover"
                src="https://placehold.co/100x100/png?text=Dog"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-text-main">
                Psí deníček
              </h1>
              <p className="text-xs text-text-secondary font-medium">
                Dobrodružství vašeho chlupáče
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 mr-4">
            <Link href="/" className="text-sm font-bold text-text-main">
              Deník
            </Link>
            <Link href="/statistics" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Statistiky
            </Link>
            <Link href="#" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Nastavení
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-text-main transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
               <img className="w-full h-full object-cover" src="https://placehold.co/100x100/orange?text=P" alt="Profile"/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-6 sm:px-6">
        
        {/* VÝBĚR DATA */}
        <section className="mb-8">
            <div className="w-full">
              <label className="block text-sm font-bold text-text-main mb-2">
                Vybrat datum
              </label>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <div className="relative flex-grow">
                    <input
                      className="block w-full rounded-xl border-gray-200 bg-surface shadow-sm focus:border-primary focus:ring focus:ring-primary/20 sm:text-sm py-3 px-4 text-text-main font-medium"
                      placeholder="DD/MM/RRRR"
                      type="text"
                      defaultValue="24/10/2023"
                    />
                  </div>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface border border-gray-200 text-sm font-bold text-text-main hover:bg-gray-50 shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    Dnešek
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface border border-gray-200 text-sm font-bold text-red-500 hover:bg-red-50 hover:border-red-100 shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                    Vymazat
                  </button>
              </div>
            </div>
        </section>

        {/* FORMULÁŘ NOVÁ UDÁLOST */}
        <section className="mb-10">
          <div className="bg-surface rounded-2xl shadow-soft p-5 sm:p-6 border border-gray-100">
            <h2 className="text-lg font-extrabold text-text-main mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">add_circle</span>
              Nová událost
            </h2>
            
            {/* TADY JE ZMĚNA: Přidali jsme action={addEvent} */}
            <form action={addEvent} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Čas */}
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-text-secondary mb-2">Čas</label>
                  <input
                    name="time" 
                    className="w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 text-text-main font-bold py-2.5"
                    type="text"
                    defaultValue="14:30"
                  />
                </div>
                {/* Typ události */}
                <div className="sm:col-span-9">
                  <label className="block text-sm font-medium text-text-secondary mb-2">Typ události</label>
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                        <select name="type" className="w-full appearance-none rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 text-text-main font-bold py-2.5 pl-10">
                          <option value="curani">Čůrání (Venčení)</option>
                          <option value="kakani">Kakání (Venčení)</option>
                          <option value="jidlo">Jídlo</option>
                          <option value="spanek">Spánek</option>
                          <option value="hrani">Hraní</option>
                          <option value="pamlsky">Pamlsky</option>
                        </select>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-blue-400 text-[20px]">water_drop</span>
                        </div>
                    </div>
                    <button type="button" className="h-[46px] w-[46px] shrink-0 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-2xl">add</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Lokace a Místo */}
              <div className="p-4 rounded-xl bg-pastel-blue/30 border border-blue-50/50 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Kde to bylo?
                    </label>
                    <div className="flex gap-2">
                      <label className="cursor-pointer flex-1">
                        <input defaultChecked className="peer sr-only" name="location" value="venku" type="radio"/>
                        <div className="h-10 px-4 rounded-lg bg-white border border-gray-200 text-text-secondary peer-checked:bg-primary peer-checked:text-text-main peer-checked:border-primary peer-checked:font-bold shadow-sm transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">park</span>
                          Venku
                        </div>
                      </label>
                      <label className="cursor-pointer flex-1">
                        <input className="peer sr-only" name="location" value="uvnitr" type="radio"/>
                        <div className="h-10 px-4 rounded-lg bg-white border border-gray-200 text-text-secondary peer-checked:bg-primary peer-checked:text-text-main peer-checked:border-primary peer-checked:font-bold shadow-sm transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">home</span>
                          Uvnitř
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Místo
                    </label>
                    <div className="relative">
                        <select name="place" className="w-full appearance-none rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-primary/20 text-sm py-2.5 pl-3 pr-8 text-text-main font-medium">
                        <option value="Na trávě">Na trávě</option>
                        <option value="V parku">V parku</option>
                        <option value="Na chodníku">Na chodníku</option>
                        <option value="Doma">Doma</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                             <span className="material-symbols-outlined text-gray-400 text-sm">expand_more</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Poznámka */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Poznámka (volitelné)
                </label>
                <input
                  name="note"
                  className="w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 text-sm py-3 px-4"
                  placeholder="Např. byl moc šikovný..."
                  type="text"
                />
              </div>

              <button
                className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-text-main font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                Přidat událost
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </section>
        
        {/* ZBYTEK STRÁNKY ZŮSTÁVÁ STEJNÝ (Filtry, Timeline, Footer...) */}
        {/* Pro přehlednost jsem zbytek kódu zkrátil, ale ty ho tam nechej celý, 
            jak jsi ho měla v předchozím kroku. Důležité je jen vyměnit tu sekci <form> výše. 
            Pokud chceš, můžu ti poslat i ten zbytek, ale stačí přepsat jen tu <form> část. 
        */}
        
      </main>
    </div>
  );
}