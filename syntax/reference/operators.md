# Operators in Lucee

This document provides a comprehensive reference for operators available in Lucee.

## Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| + | Addition | `a + b` |
| - | Subtraction | `a - b` |
| * | Multiplication | `a * b` |
| / | Division | `a / b` |
| % | Modulus | `a % b` |
| ^ | Exponentiation | `a ^ b` |
| ++ | Increment | `a++` |
| -- | Decrement | `a--` |

## Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| == | Equal | `a == b` |
| === | Identical | `a === b` |
| != | Not Equal | `a != b` |
| !== | Not Identical | `a !== b` |
| > | Greater Than | `a > b` |
| >= | Greater Than or Equal | `a >= b` |
| < | Less Than | `a < b` |
| <= | Less Than or Equal | `a <= b` |

## Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| && | Logical AND | `a && b` |
| \|\| | Logical OR | `a \|\| b` |
| ! | Logical NOT | `!a` |
| AND | Logical AND (alternative) | `a AND b` |
| OR | Logical OR (alternative) | `a OR b` |
| NOT | Logical NOT (alternative) | `NOT a` |

## String Operators

| Operator | Description | Example |
|----------|-------------|---------|
| & | String concatenation | `"Hello" & "World"` |
| &= | Concatenation assignment | `str &= "append"` |

## Assignment Operators

| Operator | Description | Example |
|----------|-------------|---------|
| = | Simple assignment | `a = b` |
| += | Addition assignment | `a += b` |
| -= | Subtraction assignment | `a -= b` |
| *= | Multiplication assignment | `a *= b` |
| /= | Division assignment | `a /= b` |
| %= | Modulus assignment | `a %= b` |

## Decision Operators

| Operator | Description | Example |
|----------|-------------|---------|
| ?: | Ternary operator | `condition ? valueIfTrue : valueIfFalse` |
| ?? | Null coalescing | `value ?? defaultValue` |
| ?: | Elvis operator | `value ?: defaultValue` |

## Array and Struct Operators

| Operator | Description | Example |
|----------|-------------|---------|
| [] | Array/Struct access | `array[1]` or `struct["key"]` |
| . | Member access | `struct.key` |

## Notes

- Operator precedence follows standard programming conventions
- String comparison is case-insensitive by default
- The `===` and `!==` operators check both value and type
- The Elvis operator (`?:`) is a shorthand for null coalescing

## Best Practices

1. Use parentheses to make operator precedence explicit in complex expressions
2. Prefer `===` over `==` when type checking is important
3. Use meaningful variable names in expressions
4. Consider using alternative logical operators (AND, OR, NOT) for better readability in complex conditions
