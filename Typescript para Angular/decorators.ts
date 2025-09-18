// Decorator de classe
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

// Decorator de propriedade no modelo novo (TS 5+)
function minLength(length: number) {
  return function (value: undefined, context: ClassFieldDecoratorContext) {
    return function (initialValue: string) {
      if (initialValue.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      }
      return initialValue;
    };
  };
}

@apiVersion("1.10")
class API {
  @minLength(3)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const api = new API("produto");
console.log(api.nome); // "produto"
console.log((api as any).__version); // "1.10"
