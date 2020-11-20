```


const hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
// const b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
const chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

// let binb2hex;


// function b64_sha1(s: string): string { return binb2b64(coreSha1(str2binb(s), s.length * chrsz)); }
// function str_sha1(s: string): string { return binb2str(coreSha1(str2binb(s), s.length * chrsz)); }
// function hex_hmac_sha1(key: string, data: string): string { return binb2hex(core_hmac_sha1(key, data)); }
// function b64_hmac_sha1(key: string, data: string): string { return binb2b64(core_hmac_sha1(key, data)); }
// function str_hmac_sha1(key: string, data: string): string { return binb2str(core_hmac_sha1(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */

// function sha1_vm_test(): boolean {
//     return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
// }

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function rol(num: number, cnt: number): number {
    return (num << cnt) | (num >>> (32 - cnt));
}

function safeAdd(x: number, y: number): number {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
function sha1Ft(t: number, b: number, c: number, d: number): number {
    if (t < 20) return (b & c) | ((~b) & d);
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1Kt(t: number): number {
    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
        (t < 60) ? -1894007588 : -899497514;
}

function coreSha1(x: number[], len: number): number[] {
    /* append padding */
    x[len >> 5] |= 0x80 << (24 - len % 32);
    x[((len + 64 >> 9) << 4) + 15] = len;

    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;

        for (let j = 0; j < 80; j++) {
            if (j < 16) w[j] = x[i + j];
            else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            const t = safeAdd(safeAdd(rol(a, 5), sha1Ft(j, b, c, d)),
                safeAdd(safeAdd(e, w[j]), sha1Kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }

        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
        e = safeAdd(e, olde);
    }
    return [a, b, c, d, e];

}

/*
 * Perform the appropriate tripconst combination function for the current
 * iteration
 */


/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
// function core_hmac_sha1(key: string, data: string): number[] {
//     let bkey = str2binb(key);
//     if (bkey.length > 16) bkey = coreSha1(bkey, key.length * chrsz);

//     const ipad = Array(16), opad = Array(16);
//     for (const i = 0; i < 16; i++) {
//         ipad[i] = bkey[i] ^ 0x36363636;
//         opad[i] = bkey[i] ^ 0x5C5C5C5C;
//     }

//     const hash = coreSha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
//     return coreSha1(opad.concat(hash), 512 + 160);
// }

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


/*
 * Bitwise rotate a 32-bit number to the left.
 */


/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str: string): number[] {
    const bin: number[] = [];
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i % 32);
    return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
// function binb2str(bin: number[]): string {
//     const str = "";
//     const mask = (1 << chrsz) - 1;
//     for (const i = 0; i < bin.length * 32; i += chrsz)
//         str += String.fromCharCode((bin[i >> 5] >>> (32 - chrsz - i % 32)) & mask);
//     return str;
// }

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray: number[]): string {
    const hexTab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    let str = "";
    for (let i = 0; i < binarray.length * 4; i++) {
        str += hexTab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
        hexTab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
// function binb2b64(binarray: number[]): string {
//     const tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//     const str = "";
//     for (const i = 0; i < binarray.length * 4; i += 3) {
//         const tripconst = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16)
//             | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8)
//             | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
//         for (const j = 0; j < 4; j++) {
//             if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
//             else str += tab.charAt((tripconst >> 6 * (3 - j)) & 0x3F);
//         }
//     }
//     return str;
// }

export function hexSha1(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)).toUpperCase(); }
export function hexSha2(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)); }
// 字符串加密成 hex 字符串

```
