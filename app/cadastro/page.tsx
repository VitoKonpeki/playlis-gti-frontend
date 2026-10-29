"use client"

import {useState} from "react"
import { musicaService } from "@/services/musicaService"
import { Musica } from "@/domain/musica"

export default function CadastroPage() {
    const [titulo, setTitulo] = useState("")
    const [artista, setArtista] = useState("")
    const [album, setAlbum] = useState("")
    const [ano, setAno] = useState("")


  async function cadastrar(e: React.FormEvent) {
    e.preventDefault()

   // try {
        const musica: Musica = {
            titulo,
            artista,
            album,
            ano: Number(ano)
      }

        await musicaService.cadastrar(musica)

    /*    alert("Música cadastrada com sucesso!")
    } catch (error) {
        console.error("Erro ao cadastrar música:", error)
        alert("Erro ao cadastrar música. Tente novamente.")
    }*/
}

    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-10 p-4">
            <form onSubmit={cadastrar} className="bg-white w-full max-w-md p-6 rounded-lg shadow space-y-4">
                <h1>Cadastrar Música</h1>
                <input placeholder="titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
                />
                <input placeholder="artista" value={artista} onChange={(e)=>setArtista(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
                />
                <input placeholder="album" value={album} onChange={(e)=>setAlbum(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
                />
                <input placeholder="ano" value={ano} onChange={(e)=>setAno(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
                />
                
                <button type="submit" className="bg-blue-600 text-white px-4 rounded w-full hover:bg-blue-700">
                    Salvar
                </button>

                </form>

        </main>
    )
}