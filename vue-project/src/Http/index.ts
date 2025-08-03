import type ICategoria from "@/Interfaces/ICategoria";
import type IReceita from "@/Interfaces/ICategoria";


export async function ObterCategorias() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json') 
    const categorias: ICategoria[] = await response.json();
    return categorias;
}

export async function ObterReceitas() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
    const receitas: IReceita[] = await response.json(); 
    return receitas;
}