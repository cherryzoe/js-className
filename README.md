# js-className

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-fk3azo)

classnames is a commonly used utility in modern front end applications to conditionally join CSS class names together. If you've written React or Vue applications, you likely have used a library like this.

usecase:
```
classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'
```
