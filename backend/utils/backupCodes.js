const crypto = require("crypto");

function generateBackupCodes() {
  const codes = [];
  for (let i = 0; i < 5; i++) {
    codes.push(crypto.randomBytes(3).toString("hex").toUpperCase());
  }
  return codes;
}

module.exports = { generateBackupCodes };
