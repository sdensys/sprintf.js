# sprintf.js
A variant of a loose implementation of the sprintf() PHP-function for JavaScript 

## Format:
String __sprintf__ (String _format_, Array _args_);

## Parameters:
_format_  - format string for output.  

The format string consists of zero or more directives: ordinary characters (with the exception of `%`),
which are copied directly into the resulting string, and conversion descriptors, each of which is
replaced with one of the parameters. To print the `%` symbol itself into output string, you need to
duplicate it (`%%`). 

Each conversion descriptor consists of a percent sign (`%`) followed by one or more optional elements,
in the order in which they are listed here:  
1) An optional character `+` specifier specifying how a sign (- or +) will be applied to a number.
   By default, only the minus sign is used if the number is negative. This specifier causes positive
   numbers to display a plus sign as well.
2) An optional padding specifier that specifies which character will be used to pad the result to the
   required length. This can be a `space` or `0`. The default is space. An alternate character can be
   specified using a single quote (`'`), for example `'.`.
3) An optional alignment specifier specifying left or right alignment. Right-aligned by default.
   `-` used for left-alignment.
4) An optional number, a width specifier that specifies the minimum number of characters that will contain
   the result of this conversion.
5) An optional precision specifier, specified in the form of a dot (`.`). Followed by an optional decimal
   string specifying how many decimal places to display for floating point numbers. When used with strings,
   this specifier acts as a trim point that sets the maximum character limit (before padding).
6) Type descriptor, which determines how to interpret the data type of the argument.
   Valid types:  
   `b` - the argument is treated as an integer and displayed as a binary number;  
   `c` - the argument is treated as an integer and displayed as a character with the appropriate ASCII code;  
   `d` - the argument is treated as an integer and displayed as a signed decimal number;  
   `e` - the argument is treated as a number in scientific notation (for example, `1.2e+2`). The precision specifier indicates the number of decimal places;   
   `E` - same as `e`, but uses an uppercase letter (for example, `1.2E+2`);  
   `f` - the argument is treated as a floating point number;  
   `g` - selects the shortest notation from `e` and `f`;  
   `G` - selects the shortest notation from `E` and `f`;  
   `o` - the argument is treated as an integer and displayed as an octal number;  
   `s` - the argument is treated as a string;  
   `u` - the argument is treated as an integer and displayed as an unsigned decimal number;  
   `x` - the argument is treated as an integer and displayed as a hexadecimal number (in lower case);  
   `X` - the argument is treated as an integer and displayed as a hexadecimal number (in upper case).  

If a parameter in the format string is invalid, it is ignored (not printed to the output string). 

_args_    - array with all arguments.
The function returns the resulting string
Each argument in the array corresponds to the next parameter in the format string.  
If an array element is undefined for any parameter, it is ignored (not printed to the output string).  

## Return value:
The function returns the resulting string. 

## Example:
`sprintf("Hello, %s! In %u we are already %.1e",["World",2021,7753000000]);`  

__will return:__  

`"Hello, World! In 2021 we are already 7.8e+9"`
