const { exec } = require("child_process");

const token = process.env.GITHUB_TOKEN;
const realRepo = "https://" + token + "@github.com/Devpeacemaker/unknown-error.git";

exec(
  `git clone ${realRepo} realbot && cd realbot && npm install && node .`,
  (err, stdout, stderr) => {
    if (err) return console.error("❌ Error:", err);
    console.log(stdout);
    console.error(stderr);
  }
);
