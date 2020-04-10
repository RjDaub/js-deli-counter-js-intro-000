function takeANumber(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const lineNumberAndNames = []

  for (let i = 0, 1 = line.length; i < 1; i++) {
    lineNumberAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${lineNumberAndNames.join(', ')}`
}
