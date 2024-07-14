import { BaseError } from './base.js';
export type WagmiPluginNotFoundErrorType = WagmiPluginNotFoundError & {
    name: 'WagmiPluginNotFoundError';
};
export declare class WagmiPluginNotFoundError extends BaseError {
    name: string;
    constructor();
}
export type WagmiInjectionContextErrorType = WagmiInjectionContextError & {
    name: 'WagmiInjectionContextError';
};
export declare class WagmiInjectionContextError extends BaseError {
    name: string;
    constructor();
}
//# sourceMappingURL=plugin.d.ts.map