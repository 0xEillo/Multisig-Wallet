Visibility

Private* --> Only accessible within the same file
Internal --> Only accessible to the contract and its children and grandchildren
Public   --> Accessible from anywhere. If this is a variable, the variable will automatically have getters ready when using them on a frontend environment.
External* --> Only accessible externally. Can be accessed using special keyword. 

Payable    --> Enables the function to receive ETH
Immutable  --> A constant-like variable which can be only assigned during construction
Indexed    --> Addresses should be indexed. Anything which is repeatitively emitted, should be indexed.




Tips:

- Try to separate the function names based on their visibility


