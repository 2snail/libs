import Yargs from "../src/yargs";

export default function (yargs: typeof Yargs) {
  describe("yargs", () => {
    test("parse", () => {
      const argv = yargs.parse(["-x", "1", "-y", "2"]);
      expect(argv).toHaveProperty("x", 1);
      expect(argv).toHaveProperty("y", 2);
    });
  });
}
