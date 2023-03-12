// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const className = (...args) => {
  const res = [];

  args.forEach((arg) => {
    if (!arg) return;

    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      res.push(arg);
      return;
    }

    if (Array.isArray(arg)) {
      res.push(className(...arg));
      return;
    }

    if (argType === 'object') {
      for (const key in arg) {
        if (Object.hasOwn(arg, key)) {
          res.push(key);
        }
      }
      return;
    }
  });

  return res.join(' ');
};

const classes = className(
  'button',
  { active: undefined, error: undefined },
  'large',
  'primary'
);

console.log(classes);
