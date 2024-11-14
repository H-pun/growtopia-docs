# Cypher for items dat file
All names in file items.dat are encoded using a simple cipher. This cipher is for now always using the key `PBG892FXX982ABC*`. This cipher uses the XOR function, so the same code can be used for both encoding and decoding. You will find the code with explained functionality below.

Here is the code for decoding/encoding the cipher in Python:
```python
secret = "PBG892FXX982ABC*"  # this contains the cipher key

input_data = "..."  # to this variable you need to assign input data
item_id = ...  # to this variable you need to assign the ID of the item for which you are encoding/decoding data
output = ""  # this variable will contain output data

input_len = len(input_data)
secret_len = len(secret)

for i in range(input_len):
  secret_char_pos = (i + item_id) % secret_len  # we get the position of the secret character by adding together the position of the original character and item ID, on top of this is applied modulo with the value of the length of the secret text
  secret_char = secret[secret_char_pos]  # we get the secret character based on the position which we calculated
  input_char = input_data[i]  # we are getting one character of original data each time we execute this loop
  output += chr(ord(input_char) ^ ord(secret_char))  # input character is XORed together with the character of the secret text, which gives us the final output character
```
