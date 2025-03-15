// Import required modules
const fs = require('fs'); // File system module for file operations
const bs58 = require('bs58'); // Base58 encoding/decoding module
const { Keypair } = require('@solana/web3.js'); // Keypair class from Solana web3 library

// Define the private key (currently empty)
const privateKey = '';

// Create a Keypair object from the seed derived from the decoded private key
const keypairData = Keypair.fromSeed(Uint8Array.from(bs58.default.decode(privateKey).slice(0, 32)));

// Convert the secret key to a string format
const secretKey = `[${keypairData.secretKey.toString()}]`;

// Save the secret key to a file named 'keypair.json'
fs.writeFileSync('keypair.json', secretKey);

// Log the public key to the console
console.log('Public Key:', keypairData.publicKey.toString());
// Confirm that the secret key has been saved
console.log('Secret Key saved to keypair.json');


// Run Command: node importKey.js