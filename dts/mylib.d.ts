export function sum(x: number, y: number, numbers: number[]): number;
export function maximum(arr: number[]): number | null;
export function quote(message: string): () => string;


export type CaseKinds = 'lowercase' | 'uppercase';
export function setCase(message: string, kind: CaseKinds ): string;