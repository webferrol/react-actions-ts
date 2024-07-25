export const asyncUserValueMock = async (value: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(value)
    }, 3000)
  })
}
