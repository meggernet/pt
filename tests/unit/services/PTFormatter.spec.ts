import { toPT, calculateTotalHours, parseInput } from "@/services/PTFormatter";

describe("PTFormatter => toPT", () => {
  it("can format from 1W to 5PT", () => {
    const input = "1W";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 5;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("is case insensitive", () => {
    const input = "1w";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 5;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("formats to correct output for 6H and onePThasHours=6", () => {
    const input = "6H";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 1;

    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("formats to correct output for 6H and onePThasHours=8", () => {
    const input = "6H";
    const inputPThasHours = 8;
    const outputPThasHours = 8;
    const expected = 0.75;

    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("formats to correct output for 8H and onePThasHours=6", () => {
    const input = "8H";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 1.3333333333333333;

    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("formats to correct output for 8H and onePThasHours=8", () => {
    const input = "8H";
    const inputPThasHours = 8;
    const outputPThasHours = 8;
    const expected = 1;

    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it.each([
    ["1W1D", 6, 6, 6],
    ["1w1d", 6, 6, 6],
    ["1W 1d", 6, 6, 6],
    ["1w 1D", 6, 6, 6],
    ["1w 2d", 6, 6, 7],
    ["2w 1d", 6, 6, 11],
  ])(
    "can format more complex inputs '%s' to PT",
    (
      input: string,
      inputPThasHours: number,
      outputPThasHours: number,
      expected: number,
    ) => {
      expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
        expected,
      );
    },
  );

  it.each([
    ["1W1D4H", 8, 8, 6.5],
    ["1w1d4h", 8, 8, 6.5],
    ["1W 1d 4h", 8, 8, 6.5],
    ["1w 1D 4h", 8, 8, 6.5],
    ["1w 2d 4H", 8, 8, 7.5],
    ["2w 1d 4H", 8, 8, 11.5],
    ["1w1d3h", 6, 6, 6.5],
  ])(
    "can format more complex inputs with hours '%s' to PT",
    (
      input: string,
      inputPThasHours: number,
      outputPThasHours: number,
      expected: number,
    ) => {
      expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
        expected,
      );
    },
  );

  it.each([
    ["1w", 6, 8, 3.75],
    ["1w", 8, 6, 6.666666666666667],
  ])(
    "can format more complex inputs with different output hours '%s' to PT",
    (
      input: string,
      inputPThasHours: number,
      outputPThasHours: number,
      expected: number,
    ) => {
      expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
        expected,
      );
    },
  );
});

describe("PTFormatter => Hours to PT", () => {
  it("can output 1PT from 8H if 1PT=8H", () => {
    const input = "8H";
    const inputPThasHours = 8;
    const outputPThasHours = 8;
    const expected = 1;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("can output 1PT from 6H if 1PT=6H", () => {
    const input = "6H";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 1;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("can output 0.5PT from 4H if 1PT=8H", () => {
    const input = "4H";
    const inputPThasHours = 8;
    const outputPThasHours = 8;
    const expected = 0.5;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("can output 0.5PT from 3H if 1PT=6H", () => {
    const input = "3H";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 0.5;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("can output 0.25PT from 2H if 1PT=8H", () => {
    const input = "2H";
    const inputPThasHours = 8;
    const outputPThasHours = 8;
    const expected = 0.25;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });

  it("can output 0.25PT from 1.5H if 1PT=6H", () => {
    const input = "1.5H";
    const inputPThasHours = 6;
    const outputPThasHours = 6;
    const expected = 0.25;
    expect(toPT(input, inputPThasHours, outputPThasHours)).toStrictEqual(
      expected,
    );
  });
});

describe("PTFormatter => parseInput", () => {
  it("can parse week input '1W'", () => {
    const input = "1W";
    const expected = [1, 0, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse PT input '1D'", () => {
    const input = "1D";
    const expected = [0, 1, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse Hour input '1H'", () => {
    const input = "1H";
    const expected = [0, 0, 1];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse combined Week and PT input '2W2D'", () => {
    const input = "2W2D";
    const expected = [2, 2, 0];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse PT and hours input '3D4H'", () => {
    const input = "3D4H";
    const expected = [0, 3, 4];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it("can parse special PT and hours input '0.33D0.33H'", () => {
    const input = "0.33D0.33H";
    const expected = [0, 0.33, 0.33];
    expect(parseInput(input)).toStrictEqual(expected);
  });

  it.each([
    ["1W1D", [1, 1, 0]],
    ["1w1d", [1, 1, 0]],
    ["1W 1d", [1, 1, 0]],
    ["1w 1D", [1, 1, 0]],
    ["1w 2d", [1, 2, 0]],
    ["2w 1d", [2, 1, 0]],
    ["1W1D4H", [1, 1, 4]],
    ["1w1d4h", [1, 1, 4]],
    ["1W 1d 4h", [1, 1, 4]],
    ["1w 1D 4h", [1, 1, 4]],
    ["1w 2d 4H", [1, 2, 4]],
    ["2w 1d 4H", [2, 1, 4]],
    ["10w 11D 12H", [10, 11, 12]],
    ["10W11D12H", [10, 11, 12]],
    ["10w11d12h", [10, 11, 12]],
    ["10W 11D 12H", [10, 11, 12]],
    ["10w 11D 12h", [10, 11, 12]],
    ["10w 11d 12H", [10, 11, 12]],
    ["1.5H", [0, 0, 1.5]],
    ["1.5h", [0, 0, 1.5]],
    ["1.5D", [0, 1.5, 0]],
    ["1.5d", [0, 1.5, 0]],
    ["1.5W", [1.5, 0, 0]],
    ["1.5w", [1.5, 0, 0]],
  ])(
    "can parse more complex inputs '%s'",
    (input: string, expected: number[]) => {
      expect(parseInput(input)).toStrictEqual(expected);
    },
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
    },
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
