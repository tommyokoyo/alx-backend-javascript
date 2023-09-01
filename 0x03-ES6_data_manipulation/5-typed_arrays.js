function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);

  const view = new DataView(buffer, 0);

  view.setInt8(position, value);

  return view;
}
export default createInt8TypedArray;
