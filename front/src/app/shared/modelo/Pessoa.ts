export class Pessoa {
    constructor(private _id: number, private _nome: string, private _idade: number, private _nacionalidade: string) { };

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get nacionalidade(): string {
        return this._nacionalidade;
    }

    public set nacionalidade(value: string) {
        this._nacionalidade = value;
    }
}