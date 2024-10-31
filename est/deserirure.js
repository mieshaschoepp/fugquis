function calculateHash(pat, base, pSize) {
    let hash = 0;
    for (let i = 0; i < pSize; i++) {
        hash += pat.charCodeAt(i) * Math.pow(base, pSize - 1 - i);
    }
    return hash;
}

const pattern = "abc";
const base = 31; // A common choice for the constant base
const pSize = pattern.length;

const pHash = calculateHash(pattern, base, pSize);
console.log(`Hash of pattern "${pattern}" is: ${pHash}`);
