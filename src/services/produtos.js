class ProdutoService {
    constructor(ProdutoModel) {
        this.produto = ProdutoModel;
    }

    async get() {
        try {
            const produtos = await this.produto.findAll();
            return produtos;
        } catch (erro) {
            console.log(error.message);
            throw error;
        }
    }

    async adicionar(produtoDTO) {
        try {
            await this.produto.create(produtoDTO);
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}

module.exports = ProdutoService