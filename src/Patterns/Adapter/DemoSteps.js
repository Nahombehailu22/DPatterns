const stepValues = [
    [false, false, true, true, true],
    [false, false, false, true, true],
    [false, false, false, false, false],
    [false, true, true, true, true]
  ]

  const edgeValues = [
    [false, true, true, true],
    [false, false, true, true],
    [false, false, false, false],
    [true, true, true, true]
  ]

  const popValues = [
    [true, false, true, true],
    [true, true, false, true],
    [true, true, true, false],
    [false, true, true, true]
  ]

export {stepValues, edgeValues, popValues};