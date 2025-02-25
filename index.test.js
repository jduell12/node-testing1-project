const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  it("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };

    const actual = utils.trimProperties(input);
    expect(actual).not.toEqual(input);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  it("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  it("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);

    expect(actual).toEqual(input);
    expect(input).toEqual(expected);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    const input = [10, 34, 50, 100, 30, 80];
    const expected = 100;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const expected = 3;
    const actual = counter.countDown();
    expect(actual).toEqual(expected);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    const expected = 2;
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toEqual(expected);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    const expected = 0;
    for (let i = 0; i < 5; i++) {
      counter.countDown();
    }
    const actual = counter.countDown();
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = "summer";
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    const expected = "fall";
    seasons.next();
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    const expected = "winter";
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const expected = "spring";
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const expected = "summer";
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    const expected = "spring";
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    const expected = 100;
    const actual = focus.drive("100");
    expect(actual).toEqual(expected);
  });
  it("[16] driving the car uses gas", () => {
    const expected = 0;
    focus.drive("700");
    const actual = focus.tank;
    expect(actual).toEqual(expected);
  });
  it("[17] refueling allows to keep driving", () => {
    const expected = 30;
    focus.drive("700");
    const actual = focus.refuel(1);
    expect(actual).toEqual(expected);
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    const expected = 600;
    focus.drive("700");
    const actual = focus.refuel(99);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", () => {
    utils
      .isEvenNumberAsync(2)
      .then((actual) => {
        expect(actual).toBe(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it("[20] resolves false if passed an odd number", () => {
    utils
      .isEvenNumberAsync(1)
      .then((actual) => {
        expect(actual).toBe(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    const expected = "number must be a number";
    utils.isEvenNumberAsync("foo").catch((err) => {
      expect(err).toEqual(expected);
    });
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    const expected = "number must be a number";
    utils.isEvenNumberAsync(NaN).catch((err) => {
      expect(err).toEqual(expected);
    });
  });
});
