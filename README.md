# Swagger-Fuzzer

This javascripts and html can be interactively use to fuzz a regex or swagger document or JSON Schema document to find all the 'pattern' regex attributes and that regex will be tested with bunch of known input to see what is still passing with that regex.

The fuzzing list is taken from OWASP https://sourceforge.net/p/wsfuzzer/code/HEAD/tree/trunk/WSFuzzer/dict/All_attack.txt

Or if you want to run on command line , modify the test.js file slighthly and run using node.

For example if you provide this regex as input ^[A-Za-z0-9]+$ it shall list the bad inputs that is validated by this regex. Out put look like this.

Found these bad pattern pass through: [ "-----regex----------^[A-Za-z0-9]+$", "A", "TRUE", "FALSE", "0", "00", "1", "2", "65536", "268435455", "2147483647", "0xfffffff", "NULL", "null", "PRINT", "select", "insert", "as", "or", "procedure", "limit", "asc", "desc", "delete", "update", "distinct", "having", "truncate", "replace", "like", "handler", "bfilename" ]
