export function getUser(): Promise<string> {
  return new Promise((resolve) => {
    console.log('ss');
    setTimeout(() => {
      resolve('johncena@youcantsee.me');
    }, 1000);
  });
}
