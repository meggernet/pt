import {toPT, calculateTotalHours, parseInput} from "@/services/PTFormatter";

describe("PTFormatter => toPT", () => {
  it("can format from 1W to 5PT", () => {
    const input = "1W";
    const expected = "5PT";
    expect(toPT(input)).toStrictEqual(expected);
  });

  it("is case insensitive", () => {
    const input = "1w";
    const expected = "5PT";
    expect(toPT(input)).toStrictEqual(expected);
  });

  it.each([
    ["1W1PT", "6PT"],
    ["1w1pt", "6PT"],
    ["1W 1pt", "6PT"],
    ["1w 1PT", "6PT"],
    ["1w 2pt", "7PT"],
    ["2w 1pt", "11PT"],
  ])(
    "can format more complex inputs '%s' to PT",
    (input: string, expected: string) => {
      expect(toPT(input)).toStrictEqual(expected);
    }
  );

  it.each([
    ["1W1PT4H", 8, "6.5PT"],
    ["1w1pt4h", 8, "6.5PT"],
    ["1W 1pt 4h", 8, "6.5PT"],
    ["1w 1PT 4h", 8, "6.5PT"],
    ["1w 2pt 4H", 8, "7.5PT"],
    ["2w 1pt 4H", 8, "11.5PT"],
    ["1w1pt3h", 6, "6.5PT"],
  ])(
    "can format more complex inputs with hours '%s' to PT",
    (input: string, onePThasHours: number, expected: string) => {
      expect(toPT(input, onePThasHours)).toStrictEqual(expected);
    }
  );
});

describe("PTFormatter => Hours to PT", () => {
  it("can output 1PT from 8H if 1PT=8H", () => {
    const input = "8H";
    const onePThasHours = 8;
    const expected = "1PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can output 1PT from 6H if 1PT=6H", () => {
    const input = "6H";
    const onePThasHours = 6;
    const expected = "1PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can output 0.5PT from 4H if 1PT=8H", () => {
    const input = "4H";
    const onePThasHours = 8;
    const expected = "0.5PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can output 0.5PT from 3H if 1PT=6H", () => {
    const input = "3H";
    const onePThasHours = 6;
    const expected = "0.5PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can output 0.25PT from 2H if 1PT=8H", () => {
    const input = "2H";
    const onePThasHours = 8;
    const expected = "0.25PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can output 0.25PT from 1.5H if 1PT=6H", () => {
    const input = "1.5H";
    const onePThasHours = 6;
    const expected = "0.25PT";
    expect(toPT(input, onePThasHours)).toStrictEqual(expected);
  });
});

describe("PTFormatter => parseInput", () => {
  it("can parse week input '1W'", () => {
    const input = "1W";
    const expected = [1, 0, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse PT input '1PT'", () => {
    const input = "1PT";
    const expected = [0, 1, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse Hour input '1H'", () => {
    const input = "1H";
    const expected = [0, 0, 1];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse combined Week and PT input '2W2PT'", () => {
    const input = "2W2PT";
    const expected = [2, 2, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse PT and hours input '3PT4H'", () => {
    const input = "3PT4H";
    const expected = [0, 3, 4];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse special PT and hours input '0.33PT0.33H'", () => {
    const input = "0.33PT0.33H";
    const expected = [0, 0.33, 0.33];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it.each([
    ["1W1PT", [1, 1, 0]],
    ["1w1pt", [1, 1, 0]],
    ["1W 1pt", [1, 1, 0]],
    ["1w 1PT", [1, 1, 0]],
    ["1w 2pt", [1, 2, 0]],
    ["2w 1pt", [2, 1, 0]],
    ["1W1PT4H", [1, 1, 4]],
    ["1w1pt4h", [1, 1, 4]],
    ["1W 1pt 4h", [1, 1, 4]],
    ["1w 1PT 4h", [1, 1, 4]],
    ["1w 2pt 4H", [1, 2, 4]],
    ["2w 1pt 4H", [2, 1, 4]],
    ["10w 11PT 12H", [10, 11, 12]],
    ["10W11PT12H", [10, 11, 12]],
    ["10w11pt12h", [10, 11, 12]],
    ["10W 11PT 12H", [10, 11, 12]],
    ["10w 11PT 12h", [10, 11, 12]],
    ["10w 11pt 12H", [10, 11, 12]],
    ["1.5H", [0, 0, 1.5]],
    ["1.5h", [0, 0, 1.5]],
    ["1.5PT", [0, 1.5, 0]],
    ["1.5pt", [0, 1.5, 0]],
    ["1.5W", [1.5, 0, 0]],
    ["1.5w", [1.5, 0, 0]],
  ])(
    "can parse more complex inputs '%s'",
    (input: string, expected: number[]) => {
      expect(parseInput(input)).toStrictEqual(expected);
    }
  );
});

describe("PTFormatter => calculateTotalHours", () => {
  it.each([
    [[1, 0, 0], 8, 40],
    [[0, 1, 0], 8, 8],
    [[0, 0, 1], 8, 1],
    [[1, 1, 0], 8, 48],
    [[0, 1, 1], 8, 9],
    [[1, 0, 1], 8, 41],
    [[1, 1, 1], 8, 49],
    [[1, 0, 0], 6, 30],
    [[0, 1, 0], 6, 6],
    [[0, 0, 1], 6, 1],
    [[1, 1, 0], 6, 36],
    [[0, 1, 1], 6, 7],
    [[1, 0, 1], 6, 31],
    [[1, 1, 1], 6, 37],
    [[1.5, 0, 0], 8, 60],
    [[0, 1.5, 0], 8, 12],
    [[0, 0, 1.5], 8, 1.5],
    [[1.5, 1.5, 0], 8, 72],
    [[0, 1.5, 1.5], 8, 13.5],
    [[1.5, 0, 1.5], 8, 61.5],
    [[1.5, 1.5, 1.5], 8, 73.5],
    [[1.5, 0, 0], 6, 45],
    [[0, 1.5, 0], 6, 9],
    [[0, 0, 1.5], 6, 1.5],
    [[1.5, 1.5, 0], 6, 54],
    [[0, 1.5, 1.5], 6, 10.5],
    [[1.5, 0, 1.5], 6, 46.5],
    [[1.5, 1.5, 1.5], 6, 55.5],
  ])(
    `can calculate total hours for input '%s'`,
    (input, onePThasHours, expected) => {
      expect(calculateTotalHours(input, onePThasHours)).toStrictEqual(expected);
    }
  );

  it("can calculate special case [0, 0, 0.33]", () => {
    const input = [0, 0, 0.33];
    const onePThasHours = 8;
    const expected = 0.33;
    expect(calculateTotalHours(input, onePThasHours)).toStrictEqual(expected);
  });

  it("can calculate special case [0, 0.33, 0]", () => {
    const input = [0, 0.33, 0];
    const onePThasHours = 8;
    const expected = 2.64;
    expect(calculateTotalHours(input, onePThasHours)).toStrictEqual(expected);
  });
});
