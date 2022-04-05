export const fetchProperties = (): Promise<IPropertie[]> => {
  const promise = new Promise(
    (resolve: (data: Promise<any>) => void, reject) => {
      setTimeout(async () => {
        const data = fetch("http://localhost:3001/properties").then((res) =>
          res.json()
        );
        resolve(data);
      }, 300);
    }
  );
  return promise;
};
