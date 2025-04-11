const API_URL = import.meta.env.VITE_API_URL;

export async function fetchHello() : Promise<string>{
    const res = await fetch(`${API_URL}/hello`)
    if ( !res.ok ) {
        throw new Error("Erreur API")
    }
    const data = await res.json()
    return data.message
}
