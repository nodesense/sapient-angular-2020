class Account {
    set account(value) {
        console.log('settter called ', value)
        if (value < 0) {
            console.log('error');
            return;
        }
        this._value = value;
    }

    get account() {
        console.log('getter called');
        return this._value;
    }
}

const acc = new Account();
acc.account = -100; // calls setter
console.log("account value is ", acc.account);

acc.account++; 
