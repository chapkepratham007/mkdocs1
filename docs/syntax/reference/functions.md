# Lucee Functions Reference

This document provides a comprehensive reference for built-in functions available in Lucee.

## String Functions

| Function | Description | Example |
|----------|-------------|---------|
| `len()` | Returns the length of a string | `len("Hello") // Returns 5` |
| `left()` | Returns leftmost characters | `left("Hello", 2) // Returns "He"` |
| `right()` | Returns rightmost characters | `right("Hello", 2) // Returns "lo"` |
| `mid()` | Returns a substring | `mid("Hello", 2, 2) // Returns "el"` |
| `trim()` | Removes leading/trailing spaces | `trim(" Hello ") // Returns "Hello"` |
| `lTrim()` | Removes leading spaces | `lTrim(" Hello ") // Returns "Hello "` |
| `rTrim()` | Removes trailing spaces | `rTrim(" Hello ") // Returns " Hello"` |
| `uCase()` | Converts to uppercase | `uCase("Hello") // Returns "HELLO"` |
| `lCase()` | Converts to lowercase | `lCase("Hello") // Returns "hello"` |

## Numeric Functions

| Function | Description | Example |
|----------|-------------|---------|
| `abs()` | Returns absolute value | `abs(-5) // Returns 5` |
| `round()` | Rounds a number | `round(3.7) // Returns 4` |
| `ceiling()` | Rounds up to nearest integer | `ceiling(3.1) // Returns 4` |
| `floor()` | Rounds down to nearest integer | `floor(3.7) // Returns 3` |
| `max()` | Returns larger of two numbers | `max(5, 10) // Returns 10` |
| `min()` | Returns smaller of two numbers | `min(5, 10) // Returns 5` |
| `rand()` | Generates random number | `rand() // Returns random number` |

## Array Functions

| Function | Description | Example |
|----------|-------------|---------|
| `arrayLen()` | Returns array length | `arrayLen([1,2,3]) // Returns 3` |
| `arrayAppend()` | Adds element to array | `arrayAppend(arr, element)` |
| `arraySort()` | Sorts array elements | `arraySort(arr, "textnocase")` |
| `arrayToList()` | Converts array to list | `arrayToList([1,2,3]) // Returns "1,2,3"` |
| `arrayFind()` | Finds element in array | `arrayFind(arr, element)` |

## Structure Functions

| Function | Description | Example |
|----------|-------------|---------|
| `structNew()` | Creates new structure | `structNew()` |
| `structCount()` | Returns count of keys | `structCount(struct)` |
| `structDelete()` | Deletes key from structure | `structDelete(struct, key)` |
| `structFind()` | Finds value in structure | `structFind(struct, key)` |
| `structKeyExists()` | Checks if key exists | `structKeyExists(struct, key)` |

## Date/Time Functions

| Function | Description | Example |
|----------|-------------|---------|
| `now()` | Returns current date/time | `now()` |
| `dateFormat()` | Formats date | `dateFormat(now(), "yyyy-mm-dd")` |
| `timeFormat()` | Formats time | `timeFormat(now(), "HH:mm:ss")` |
| `dateAdd()` | Adds interval to date | `dateAdd("d", 7, now())` |
| `dateDiff()` | Calculates difference between dates | `dateDiff("d", date1, date2)` |

## Type Conversion Functions

| Function | Description | Example |
|----------|-------------|---------|
| `toString()` | Converts to string | `toString(123)` |
| `toNumeric()` | Converts to number | `toNumeric("123")` |
| `toBinary()` | Converts to binary | `toBinary(string)` |
| `toBase64()` | Converts to base64 | `toBase64(string)` |
| `serialize()` | Serializes complex objects | `serialize(object)` |
| `deserialize()` | Deserializes string data | `deserialize(string)` |

## Query Functions

| Function | Description | Example |
|----------|-------------|---------|
| `queryNew()` | Creates new query | `queryNew("col1,col2")` |
| `queryAddRow()` | Adds row to query | `queryAddRow(query)` |
| `querySetCell()` | Sets cell value | `querySetCell(query, col, value)` |
| `queryExecute()` | Executes SQL query | `queryExecute(sql, params)` |

## File System Functions

| Function | Description | Example |
|----------|-------------|---------|
| `fileExists()` | Checks if file exists | `fileExists(path)` |
| `fileRead()` | Reads file content | `fileRead(path)` |
| `fileWrite()` | Writes to file | `fileWrite(path, content)` |
| `directoryExists()` | Checks if directory exists | `directoryExists(path)` |
| `directoryCreate()` | Creates directory | `directoryCreate(path)` |

## Best Practices

1. Always check function return types in documentation
2. Use appropriate error handling with functions that may fail
3. Consider performance implications with large datasets
4. Use built-in functions instead of custom implementations when available
5. Check function compatibility across Lucee versions

## Notes

- Function names are case-insensitive
- Many functions have optional parameters
- Some functions have aliases or alternative names
- Check the official Lucee documentation for complete parameter lists and usage examples
