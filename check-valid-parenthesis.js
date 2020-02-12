const input = '[()]{}{()()}';
// const input = '[(])';

function areParenthesisValid(str) {
  if (!str)
    return true; // let's be positive :)
  
  const parenthesis = {
    open: ['{', '(', '['],
    close: ['}', ')', ']']
  }
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    
    if (!parenthesis.open.includes(char) && !parenthesis.close.includes(char)) { // unknown char
      return false;
    }

    const index = parenthesis.open.indexOf(char);

    if (index >= 0) { // open
      stack.push(char);
    } else { // close
      if (!stack.length) { // closing without an opening
        return false;
      }

      // since it's a closing character, and open/close arrays match indexes,
      // get the corresponding opening parenthesis from the current closing index,
      // and compare it to the last item in the stack; if they match - remove it
      if (stack[stack.length - 1] === parenthesis.open[parenthesis.close.indexOf(char)]) {
        stack.pop();
      } else { // we try to close unexisting pair
        return false;
      }
    }
  }

  return stack.length === 0; // is everything opened closed?
}

console.log(areParenthesisValid(input));