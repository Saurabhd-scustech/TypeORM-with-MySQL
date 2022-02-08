export class UserSchema {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public about: string
    ) { }
}