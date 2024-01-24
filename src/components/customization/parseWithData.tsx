export const parseWithData = (htmlString: string, data: any): string => {
  const regex = /{{\s*([^}]+)\s*}}/g;

  return htmlString.replace(regex, (match, path) => {
    // Split the path by dots, but also handle array indices correctly
    const keys = path.match(/[^.[\]]+/g) || [];
    let currentData: any = data;

    try {
      for (const key of keys) {
        if (isNaN(+key)) {
          currentData = currentData[key];
        } else {
          currentData = currentData[parseInt(key, 10)];
        }
      }
    } catch {
      // Return the original placeholder if the path is not valid
      return match;
    }

    return currentData !== undefined ? currentData : match;
  });
};
