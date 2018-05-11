// Filter out falsy values
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(x => Boolean(x));
}

bouncer([7, "ate", "", false, 9]);
