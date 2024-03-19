try {
    // Executado quando não há erros
    console.log('Abri o arquivo');
    console.log(a);
    console.log('Manipulei o arquivo');
} catch (e) {
    // Executado quando há erros
    console.log('Deu erro');
} finally {
    // Sempre executado
    console.log('Fecha o arquivo');
}
