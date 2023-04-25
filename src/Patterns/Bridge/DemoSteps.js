const stepValues = [
    [true, false, false, true, true, true, true, false, true],
    [true, false, false, false, true, true, false, false, true],
    [true, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, false],
    [true, false, true, true, true, true, true, true, true]
  ];

  const edgeValues = [
    [true, false, true, true, true, true, false, true],
    [true, false, false, true, true, false, false, true],
    [true, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true]
  ];

  export {stepValues, edgeValues};
