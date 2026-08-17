export function alugarFilme(nomeFilme, dataAluguel, preço) 
{
    return `O cliente alugou o filme: ${nomeFilme} no dia: ${dataAluguel} e pagou: ${preço}.`
}

export function devolverFilme(nomeFilme, dataDevolução) 
{
    return `O cliente devolveu o filme: ${nomeFilme} no dia: ${dataDevolução}.`
}