import initSwc, { Options, Output, transformSync } from '@swc/wasm-web';
// import 'es6-promise/auto';

export class JSXCompiler {
    config: Options;

    constructor(config?: Options) {
        this.config = config ? config :  {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  pragma: 'jsx',
                  pragmaFrag: 'Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false,
                },
              },
            },
          };
    }

    async compile(code: string): Promise<Output> {
        return transformSync(code, this.config)
    }
}