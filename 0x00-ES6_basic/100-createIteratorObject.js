export default function createIteratorObject(report) {
  return {
    // eslint-disable-next-line generator-star-spacing
    *[Symbol.iterator]() {
      for (const key of Object.keys(report.allEmployees)) {
        for (const value of report.allEmployees[key]) {
          yield value;
        }
      }
    },
  };
}
