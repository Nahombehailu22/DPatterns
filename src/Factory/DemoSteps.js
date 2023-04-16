const stepValues = [
    [false, false, false, true, true, true, true, true, true],
    [false, false, false, false, true, true, false, true, true],
    [false, false, false, false, false, false, false, false, false],
    [false, true, true, true, true, true, true, true, true]
  ];

  const edgeValues = [
    [false, false, true, true, true, true, true, true, true],
    [false, false, false, true, true, false, true, true, true],
    [false, false, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true]
  ];

  export {stepValues, edgeValues};
