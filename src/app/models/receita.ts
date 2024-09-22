export interface Receita {
    idreceita?: number;
    valor: number;
    descricao: string;
    data_receita: Date;
    idcategoria: number;
    idusuario: number;
    nome?: string;
}
