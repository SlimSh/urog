import fs from 'fs'
export async function readDir (path, next)  {
  try {
    let files = await fs.readdirSync(
      `${__dirname}/..`,
      (err, files) => files
    );
    return files;
  } catch (err) {
    console.log(`Error cant read directory`);
  }
};
