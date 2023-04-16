import { CheckedState } from "@radix-ui/react-checkbox";

interface GeneratePasswordProps {
  charLength: number,
  upercase: CheckedState,
  lowercase: CheckedState,
  numbers: CheckedState,
  symbols: CheckedState
}

/**
 * Generates a random password with customizable length and character sets.
 * @param charLength The desired length of the password.
 * @param lowercase Whether to include lowercase letters in the password.
 * @param numbers Whether to include numbers in the password.
 * @param symbols Whether to include symbols in the password.
 * @param upercase Whether to include uppercase letters in the password.
 * @returns A randomly generated password.
 */

export function generatePassword({
  charLength,
  lowercase,
  numbers,
  symbols,
  upercase
}: GeneratePasswordProps) {
  const charLowercase = "abcdefghijkmnopqrstuvwxyz";
  const charUpercase = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const charSymbols = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  const charNumbers = "23456789";

  const charSets: string[] = [];

  if (lowercase) {
    charSets.push(charLowercase);
  }

  if (numbers) {
    charSets.push(charNumbers);
  }

  if (symbols) {
    charSets.push(charSymbols);
  }

  if (upercase) {
    charSets.push(charUpercase);
  }

  let password = "";

  charSets.forEach(charSet => {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % charSet.length;
    password += charSet[randomIndex];
  });

  for (let i = charSets.length; i < charLength; i++) {
    const randomSetIndex = crypto.getRandomValues(new Uint32Array(1))[0] % charSets.length;
    const charSet = charSets[randomSetIndex];
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % charSet.length;
    
    password += charSet[randomIndex];
  }

  return password;
}
