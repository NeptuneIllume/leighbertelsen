import { execSync } from 'child_process';

/**
 * Get the last modified date of a file from git history
 * @param filePath - The path to the file relative to the project root
 * @returns The date in YYYY-MM-DD format, or null if git fails
 */
export function getLastModified(filePath: string): string | null {
  try {
    const date = execSync(`git log -1 --format=%cs "${filePath}"`, {
      encoding: 'utf-8',
      cwd: process.cwd(),
    }).trim();
    return date || null;
  } catch (error) {
    console.warn(`Could not get last modified date for ${filePath}:`, error);
    return null;
  }
}
