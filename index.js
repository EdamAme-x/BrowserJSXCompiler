var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { transformSync } from '@swc/wasm-web';
// import 'es6-promise/auto';
export class JSXCompiler {
    constructor(config) {
        this.config = config ? config : {
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
    compile(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return transformSync(code, this.config);
        });
    }
}
