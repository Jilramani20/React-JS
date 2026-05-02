## <span style="color:blue;">Closure in JavaScript (Password Generator Example)</span>

### <span style="color:orange;">What is Closure?</span>
**Closure** = A function that **remembers** variables from its **outer scope** even after the outer function has finished executing.

This is THE most important concept for understanding JavaScript!

### <span style="color:orange;">The Basic Closure Example</span>

```jsx
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}

const myFunction = outer();  // outer() finishes executing
myFunction();  // "Hello" - but how does it still remember "message"?

```

**What just happened?**

1. `outer()` runs and creates `message`
2. `inner()` is defined INSIDE `outer()` - it "closes over" `message`
3. `outer()` returns `inner` and finishes
4. Normally, `message` would be garbage collected... **BUT**
5. `inner` still has a reference to `message` - this is a **closure**!
6. When we call `myFunction()` (which is `inner`), it still remembers `message`

###  <span style="color:orange;">Why Closures Exist</span>

**Without closures:** Functions would only access their own variables and globals.

**With closures:** Functions can "carry" their environment with them!

```jsx
function createCounter() {
    let count = 0;  // Private variable

    return function() {
        count++;  // Accesses outer variable
        return count;
    };
}

const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// "count" is NEVER directly accessible!
console.log(count);  // ❌ ReferenceError

```

**Key insight:** `count` lives on even though `createCounter()` finished! The returned function "closes over" it.

###  <span style="color:orange;">Real-World Example 1: Private Variables</span>

Closures let you create **truly private** variables!

```jsx
function createBankAccount(initialBalance) {
    let balance = initialBalance;  // PRIVATE - can't be accessed directly

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },

        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance());  // 100
myAccount.deposit(50);  // 150
myAccount.withdraw(30);  // 120

// Can't directly access or modify balance!
console.log(myAccount.balance);  // undefined
myAccount.balance = 9999999;  // Doesn't work!
console.log(myAccount.getBalance());  // 120 - still protected

```

**Why this works:** All three methods (`deposit`, `withdraw`, `getBalance`) are closures that remember the `balance` variable!

### <span style="color:orange;">Password Generator Example Using Closures</span>

```jsx
function createPasswordGenerator() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    return function generatePassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    };
}
const getPassword = createPasswordGenerator();
console.log(getPassword(12));  // e.g. "aB3$dE1!gH
console.log(getPassword(16));  // e.g. "Zx9@LmN2#QwErT4%"
```
**Explanation:**
1. `createPasswordGenerator` defines a string of allowed characters (`chars`).
2. It returns the `generatePassword` function, which is a closure that remembers `chars`.
3. Each time you call `getPassword(length)`, it generates a random password of the specified length using the remembered `chars`.
### <span style="color:orange;">Summary</span>
Closures are a powerful feature in JavaScript that allow functions to remember their lexical scope. They enable private variables, data encapsulation, and more advanced patterns like function factories. Understanding closures is key to mastering JavaScript!


## <span style="color:blue;">useCallback - Hook</span>

The `useCallback` Hook returns a memoized callback function. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```jsx
function PasswordGenerator() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    
    const generatePassword =  useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        if(number) str += "0123456789";
        
        if(character) str += "!@#$%^&*()_+?><:{}[]";
        
        let pass = "";
        
        for(let i=0; i<length; i++)
        pass+=str[Math.floor(Math.random()*str.length)];

        setPassword(pass);
    }, [length, number, character]);

    useEffect(()=>{
        generatePassword();
    }, [length, number, character]);

    return (
        ...
    )
}
```

here, `generatePassword` is memoized using `useCallback`, so it only changes if `length`, `number`, or `character` change. This prevents unnecessary re-creations of the function on every render.

it will not recreate the `generatePassword` function unless one of its dependencies (`length`, `number`, or `character`) changes. This can help optimize performance, especially if `generatePassword` is passed down to child components that rely on reference equality to avoid unnecessary re-renders.

this uses closure to remember the values of `length`, `number`, and `character` each time it is called, ensuring that the generated password reflects the current state.