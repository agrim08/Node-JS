const syncKey = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
// console.log("sync key is generated", syncKey);