export default class KeyboardKey {
  constructor(codeKey, valueKey, shiftKey) {
    this.codeKey = codeKey;
    this.valueKey = valueKey;
    if (!shiftKey) {
      this.shiftKey = valueKey;
      this.typeKey = 'function';
    } else {
      this.shiftKey = shiftKey;
      this.typeKey = 'letter';
    }
  }
}
