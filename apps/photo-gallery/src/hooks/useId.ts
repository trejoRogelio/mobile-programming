export const useIdHook = () => {
    function generateId(): string {
      const characters = '1234567890abcdefghijklmnopqrstuvwxyz';
      let randomString = '';
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      return randomString;
    }
  
    return { generateId };
  };
  