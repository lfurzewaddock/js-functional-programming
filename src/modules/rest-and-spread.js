// Rest and spread

// Gather together a group of remaining arguments
// in the functions signature using the rest operator

export const aTail = (head, ...tail) => tail;

export const shiftToLast = (head, ...tail) => [...tail, head];
