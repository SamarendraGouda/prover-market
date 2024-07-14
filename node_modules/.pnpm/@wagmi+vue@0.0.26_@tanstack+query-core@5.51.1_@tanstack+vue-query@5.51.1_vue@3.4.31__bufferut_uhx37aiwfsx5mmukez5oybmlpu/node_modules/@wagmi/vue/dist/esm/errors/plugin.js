import { BaseError } from './base.js';
export class WagmiPluginNotFoundError extends BaseError {
    constructor() {
        super('No `config` found in Vue context, use `WagmiPlugin` to properly initialize the library.', {
            docsPath: '/api/TODO',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiPluginNotFoundError'
        });
    }
}
export class WagmiInjectionContextError extends BaseError {
    constructor() {
        super('Wagmi composables can only be used inside `setup()` function or functions that support injection context.', {
            docsPath: '/api/TODO',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiInjectionContextError'
        });
    }
}
//# sourceMappingURL=plugin.js.map