import crypto from 'crypto'

export default class Salt {
  salt: string;
  
  constructor(salt: string) {
    this.salt = salt;
  }

  value(): string {
    return this.salt
  }

  static generate(): Salt {
    const salt = crypto.randomBytes(8).toString('hex');
    return new Salt(salt);
  }
}
